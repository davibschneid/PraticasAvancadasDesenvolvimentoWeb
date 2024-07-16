@echo off
setlocal enabledelayedexpansion

echo [Starting  MongoDB...]
cd C:\MongoDB\bin 

mongod.exe --config mongod.cfg

cd C:\MongoDB\SCRIPTS

:start
echo [MongoDB is running...]
cd C:\MongoDB\SCRIPTS
timeout /t 300 /nobreak
goto start