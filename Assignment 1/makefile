.PHONY = all clean

SRCS := $(wildcard *.c)
BINS := $(SRCS:%.c=%)

all: ${BINS}

%: %.c
	@echo "Compiling $<"
	gcc $< -o $@
	./$@.exe
	@echo "Cleaning up"
	del $@.exe