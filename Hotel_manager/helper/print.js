import chalk from "chalk";
import colors from "colors";

class OutputType {
  static INFORMATION = "INFORMATION";
  static SUCCESS = "SUCCESS";
  static WARNING = "WARNING";
  static ERROR = "ERROR";
}

// thay màu khi in thông báo
function print(message, OutputType) {
  switch (OutputType) {
    case "INFORMATION":
      console.log(message);
      break;
    case "SUCCESS":
      console.log(colors.green(message));
      break;
    case "WARNING":
      console.log(colors.yellow(message));
      break;
    case "ERROR":
      console.log(colors.red(message));
      break;
  }
}

export { print, OutputType };
