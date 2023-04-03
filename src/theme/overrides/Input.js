import { alpha } from "@mui/material/styles";

export default function CustomGlobal(theme) {
  return {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            "& svg": { color: theme.palette.text.disabled },
          },
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: alpha(theme.palette.grey[500], 0.56),
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[500], 0.12),
          "&:hover": {
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
          },
          "&.Mui-focused": {
            backgroundColor: theme.palette.action.focus,
          },
          "&.Mui-disabled": {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        underline: {
          "&:before": {
            borderBottomColor: alpha(theme.palette.grey[500], 0.56),
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(theme.palette.grey[500], 0.32),
          },
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.action.disabledBackground,
            },
          },
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: 0,
          marginTop: "24px",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => {
          if (ownerState?.severity === "warning") {
            return {
              borderColor: theme.palette.primary.dark,
              borderRadius: 0,
              borderLeft: `3px solid ${theme.palette.error.light}`,
              ".MuiAlert-icon": {
                color: theme.palette.error.light,
              },
              a: {
                color: theme.palette.primary.dark,
                fontSize: "14px",
                fontWeight: "bold",
                textDecoration: "none",
              },
              ".MuiBox-root": {
                minWidth: "400px",
                color: theme.palette.primary.dark,
                "@media (max-width:992px)": {
                  minWidth: "calc(100vw - 30vw)",
                },
              },
            };
          }
          if (ownerState?.severity === "success") {
            return {
              borderColor: theme.palette.primary.dark,
              borderRadius: 0,
              borderLeft: `3px solid ${theme.palette.success.light}`,
              ".MuiAlert-icon": {
                color: theme.palette.success.light,
              },
              a: {
                color: theme.palette.primary.dark,
                fontSize: "14px",
                fontWeight: "bold",
                textDecoration: "none",
              },
              ".MuiBox-root": {
                minWidth: "400px",
                color: theme.palette.primary.dark,
                "@media (max-width:992px)": {
                  minWidth: "calc(100vw - 30vw)",
                },
              },
            };
          }
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => {
          if (ownerState?.variant === "contained") {
            return {
              backgroundColor: theme.palette.primary.dark,
              padding: "12px 24px",
              fontSize: "14px",
              lineHeight: "20px",
              color: theme.palette.grey[0],
              minWidth: "15px",
              minHeight: "15px",
              borderRadius: "0px",
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.dark, 0.6),
              },
              "&.Mui-focused": {
                backgroundColor: theme.palette.action.focus,
              },
              "&.Mui-disabled": {
                backgroundColor: theme.palette.action.disabledBackground,
              },
            };
          }
          if (ownerState?.variant === "text") {
            return {
              backgroundColor: "none",
              padding: "12px 24px",
              fontSize: "14px",
              lineHeight: "20px",
              color: theme.palette.primary.dark,
              minWidth: "15px",
              minHeight: "15px",
              borderRadius: "0px",
              "&:hover": {
                color: alpha(theme.palette.primary.dark, 0.6),
              },
              "&.Mui-focused": {
                color: theme.palette.action.focus,
              },
              "&.Mui-disabled": {
                color: theme.palette.action.disabledBackground,
              },
            };
          }
          if (ownerState?.variant === "outlined") {
            return {
              padding: "12px 24px",
              fontSize: "14px",
              lineHeight: "20px",
              color: theme.palette.primary.dark,
              borderColor: theme.palette.primary.main,
              minWidth: "15px",
              minHeight: "15px",
              borderRadius: "0",
              "&:hover": {
                color: alpha(theme.palette.primary.dark, 0.6),
              },
              "&.Mui-focused": {
                color: theme.palette.action.focus,
              },
              "&.Mui-disabled": {
                color: theme.palette.action.disabledBackground,
              },
            };
          }
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: theme.palette.primary.dark,
        },
        root: {
          minHeight: "20px",
          button: {
            fontSize: "16px",
            lineHeight: "24px",
            minWidth: "20px",
            minHeight: "20px",
            padding: "0",
            color: theme.palette.primary.dark,
            textTransform: "capitalize",
            marginLeft: "24px",
            "&.Mui-selected": {
              color: theme.palette.primary.dark,
            },
          },
          "button:first-of-type": {
            marginLeft: 0,
          },
          MuiBox: {
            marginBottom: "30px",
          },
        },
      },
    },
  };
}
