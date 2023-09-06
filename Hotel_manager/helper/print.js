import chalk from "chalk";

class OutputType {
  static INFORMATION = "INFORMATION";
  static SUCCESS = "SUCCESS";
  static WARNING = "WARNING";
  static ERROR = "ERROR";
}

// thay màu khi in thông báo
function print(message, OutputType) {
  switch (OutputType) {
    case OutputType.INFORMATION:
      console.log(chalk.white(message));
    case OutputType.SUCCESS:
      console.log(chalk.green(message));
    case OutputType.WARNING:
      console.log(chalk.yellow(message));
    case OutputType.ERROR:
      console.log(chalk.red(message));
  }
}

export { print, OutputType };
