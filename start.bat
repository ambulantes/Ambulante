@echo off
REM

setlocal enabledelayedexpansion

for /f "usebackq tokens=1,2 delims==" %%a in (.env) do (
  if not "%%a"=="" (
    set "var=%%a"
    set "val=%%b"
    REM
    if "!var:~0,1!" neq "#" (
      setx !var! "!val!" >nul
      set "!var!=!val!"
    )
  )
)

mvnw spring-boot:run

endlocal