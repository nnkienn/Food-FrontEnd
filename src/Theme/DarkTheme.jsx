const { createTheme } = require("@mui/material");

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e91e36",
    },
    secondary: {
      main: "#5A20CB",
    },
    black: {
      main: "#5A20CB", // Thêm dấu # vào trước mã màu
    },
    background: {
      main: "#000000", // Sửa lại mã màu hợp lệ
      default: "#0D0D0D",
      paper: "#0D0D0D",
    },
    textColor: {
      primary: "#111111", // Sử dụng text thay vì textColor
    },
  },
});
