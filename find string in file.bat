echo dispays lines not containing word 
FIND /V "hello" new.txt
echo dispays count of word containing lines
FIND /C "hello" new.txt
echo dispays count of word containing lines including case sensitive words with lines
FIND /I "hello" new.txt
echo dispays line numbers of word containing lines  including case sensitive
FIND /N "hello" new.txt 
@echo off
REM following command waits cmd for 3 seconds
ping 1.1.1.1 -n 1 -w 3000 > nul
REM 1.1.1.1 is an invalid IP address and can never be reached.
REM -n 1 only attempt to connect once.
REM -w 3000 wait 3 seconds for reply.
REM nul gobble the output. 