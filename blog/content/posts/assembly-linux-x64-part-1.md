---
title: "Assembly Linux x64 - Part 1"
date: 2018-05-08T21:22:56-03:00
tags: [
  "linux",
  "assembly",
  "x64",
  "yasm"
]
draft: false
---

I'm a person that loves to learn new things, and assembly is one of the most recent topics I decide to dig into.

<!--more-->

My first contact with assembly was on the [Baking Pi](https://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os) course offered by the University of Cambridge. Probably I'll write a blog post about it in the near future.

Assembly Linux x64 is a bit different from what I've seen so far when working with bare metal ARM. Assembly Linux works on top of the kernel, so we have access to a standardized ABI, a.k.a [system calls](http://blog.rchapman.org/posts/Linux_System_Call_Table_for_x86_64).

## 1. Machine code vs Assembly Language

Assembly language is a low-level programming language for a device in which there is a very strong (but often not one-to-one) correspondence between the language and the architecture's machine code instructions. Each assembly language is specific to a particular computer architecture. In contrast, most high-level programming languages are generally portable across multiple architectures but require interpreting or compiling.

Basically, assembly is the human readable form of arquitecture opcodes, unless you understand hexadecimal and the reference table :smile:.

---

Let's take a look at a basic C program:

{{< highlight c >}}
  #include <stdio.h>

  int main(int argc, char **argv) {
    printf("Hello World!");
  }
{{< / highlight >}}

This program simply prints "Hello World" to your terminal. If you are not familiar with C, the main function is the program entrypoint. But if we compile this source code into a binary with `gcc -o hello hello.c` and look at the dissassembled instructions with `objdump -Mintel -d hello` we can see the following:

```
<ommited for brevity>
000000000000064a <main>:
 64a:   55                      push   rbp
 64b:   48 89 e5                mov    rbp,rsp
 64e:   48 83 ec 10             sub    rsp,0x10
 652:   89 7d fc                mov    DWORD PTR [rbp-0x4],edi
 655:   48 89 75 f0             mov    QWORD PTR [rbp-0x10],rsi
 659:   48 8d 3d 94 00 00 00    lea    rdi,[rip+0x94]        # 6f4 <_IO_stdin_used+0x4>
 660:   e8 cb fe ff ff          call   530 <puts@plt>
 665:   b8 00 00 00 00          mov    eax,0x0
 66a:   c9                      leave
 66b:   c3                      ret
 66c:   0f 1f 40 00             nop    DWORD PTR [rax+0x0]
<ommited for brevity>
```

This is our main function in C translated to assembly instructions. We can also see the hexadecimal values (in column  2) corresponding to the given arquitecture opcodes. For example, the first line shows the hex value `55`, which we can see in the [X86 Opcode and Instruction Reference](http://ref.x86asm.net/coder64.html#x50) is equal to a `PUSH` instruction.

Theres much more instructions in this binary then our actual main implementation, this is due to libc wrappers around the C code that you wrote. Our main function of course is called inside a `_start` label added by the C compiler to satisfy the linker requirements:

```
<ommited for brevity>
0000000000000540 <_start>:
 540:   31 ed                   xor    ebp,ebp
 542:   49 89 d1                mov    r9,rdx
 545:   5e                      pop    rsi
 546:   48 89 e2                mov    rdx,rsp
 549:   48 83 e4 f0             and    rsp,0xfffffffffffffff0
 54d:   50                      push   rax
 54e:   54                      push   rsp
 54f:   4c 8d 05 8a 01 00 00    lea    r8,[rip+0x18a]        # 6e0 <__libc_csu_fini>
 556:   48 8d 0d 13 01 00 00    lea    rcx,[rip+0x113]        # 670 <__libc_csu_init>
 55d:   48 8d 3d e6 00 00 00    lea    rdi,[rip+0xe6]        # 64a <main>
 564:   ff 15 6e 0a 20 00       call   QWORD PTR [rip+0x200a6e]        # 200fd8 <__libc_start_main@GLIBC_2.2.5>
 56a:   f4                      hlt
 56b:   0f 1f 44 00 00          nop    DWORD PTR [rax+rax*1+0x0]
 <ommited for brevity>
```

If you run the binary with strace you can see the system calls used:

`strace ./a.out`

```
<ommited for brevity>
write(1, "Hello World!\n", 13) = 13
exit_group(0)
```

Behind the scenes libc is calling the [write (2)](https://linux.die.net/man/2/write) function which of course rely on the linux system call `sys_write` to do it's job.

> fd 1 is stdout

```c
ssize_t write(int fd, const void *buf, size_t count);
```

As you can see, the Linux Kernel is the core component and every language has to use system calls at the lowest level to interact with it. Compilers translate your C, Go, Rust(LLVM), Swift(LLVM) and any other compiled language code to assembly, which makes then simple to optimize and also fast. Most of the compilers right there, specially the old ones, like gcc, use the most strange optimizations and hacks to achieve the fastest execution.

Today, due to it's complex and plataform dependent nature, assembly written by hand is most used in critical parts (like criptography and OS development) and microcontrollers / embedded devices (like the [Nixie Watch from Catodo Corner](http://www.cathodecorner.com/nwl/nwld1.asm.txt)).

---

## 2. Hello World in Assembly Linux x64

This is the structure of a basic assembly program:

{{< highlight nasm >}}
  section .text
  global _start
  _start:
    ; code here

  section .data
    ; the content is included in the elf file

  section .bss
    ; dinamically allocated by the loader
{{< / highlight >}}

1. The `section .text` define our source code, this section will be copied into memory during execution.

2. `global _start`: define a global symbol _start that's used by the linker during the linking process.

3. `_start:`: the linker will setup this address as our program entrypoint.

4. `section .data:`: This section declare a section of data that is included in the elf file on disk.

5. `section .bss:`: This section declare a section of data that's not included in the final elf. This section is dinamically allocated by the loader when you run the program. This section is also guaranteed to be all zeros when the program is loaded.

By the way, this program does nothing at all. Save this with the name `program.asm`, let's compile it and see the machine code generated:

> **You will need the yasm assembler**

```bash
yasm -f elf64 -o program.o program.asm
ld program.o
objdump -Mintel -d program
```

You should see this:

```txt
program:     file format elf64-x86-64

```

Yep, nothing. That's correct. Our program has no instructions in it so the linker outputs no instructions with just it's header information.

Here is a runnable example, a hello world using system calls:

{{< highlight nasm "linenos=table" >}}
  section .text
  global _start
  _start:
    mov rax, 1
    mov rdi, 1
    mov rsi, message
    mov rdx, 13
    syscall

    mov rax, 60
    xor rdi, rdi
    syscall
  section .data
    message: db "Hello World!", 0xA, 0x0

{{< / highlight >}}

For each line of code:

**4** - The instruction `mov` transfers the value of the right most operand to the left. In this case it stores 1 into the register `rax`. Linux has an [standardized method](http://blog.rchapman.org/posts/Linux_System_Call_Table_for_x86_64/) to call system routines from assembly. Following this table we should store the system call number in the register `rax`, for `sys_write` it's 1.

**5** - The register `rdi` for this syscall must contain a valid file descriptor, 1 is stdout. If you not trust me, try `echo "Hello World" > /proc/self/fd/1` 😉

**6** - Again, a `mov` instruction. The difference here is that it's storing the message in the register `rsi`. The message is just a label, an alias for the memory address defined in the data section. For `sys_write` the `rsi` must contain a `const char *buf`, a constant pointer (memory address) to a char. If we try to get the value that the message address is pointing to we will get the char `H`, because it points to the first item at that memory address.

**7** - In `rdx` goes the size of the buffer that it needs to write. Since the memory is a contiguous buffer of data and it only has the start of the string (the message label) it should known how many bytes to copy from this buffer to the stdout, in this case 13 bytes.

**8** - The instruction `syscall` is a special one reserved to invoke OS system call handler in x86_64 at privilege level 0. Basically it signals the kernel to execute the system call.

**10** - Here goes another system call. All programs running on `Unix` based systems have to exit with `0` to indicate success, here 60 means `sys_exit`.

**11** - The instruction `xor` apply an exclusive or between the two operands, it's the fastest way to zero out a register. In `rdi` goes the exit status, 0.

**12** Execute the `sys_exit`.

**14** - Section data is used to declare variables that will be included in the final elf file. The message label points to an address in memory that contains 13 bytes in sequence (db = define bytes), forming the `Hello World!` text followed by a line feed (10 in decimal or 0xA in hex) and the null byte character representing the end of the string, just like in C.

```bash
yasm -f elf64 -o program.o program.asm
ld program.o
objdump -Mintel -d program
```

```
00000000004000b0 <_start>:
  4000b0:       b8 01 00 00 00          mov    eax,0x1
  4000b5:       48 31 ff                xor    rdi,rdi
  4000b8:       48 c7 c6 d4 00 60 00    mov    rsi,0x6000d4
  4000bf:       48 c7 c2 0d 00 00 00    mov    rdx,0xd
  4000c6:       0f 05                   syscall
  4000c8:       48 c7 c0 3c 00 00 00    mov    rax,0x3c
  4000cf:       48 31 ff                xor    rdi,rdi
  4000d2:       0f 05                   syscall
```

What we wrote it's exactly what we are seeing! Except the message label of course, it's replaced by the memory address and the decimals by hex :smile:.

## 3. Rewriting some GNU coreutils programs in assembly linux x64

To read more about assembly I started this [repository](https://github.com/mauri870/problems-assembly) where I'm trying to mimic the base functionality of some GNU coreutils programs with pure assembly and system calls. Probably I'll cover some of these in a later post.

Please feel free to check it out and read more about this old but still exciting language!

See you again next time 😄.
