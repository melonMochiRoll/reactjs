import { createTheme } from "@mui/material/styles";

export const materialGlobalTheme = createTheme({
  components: {
    // Name of the component
    MuiFormHelperText: {
      styleOverrides: {
        // Name of the slot
        root: { 
          // Some CSS
          fontFamily: 'IBM Plex Sans KR',
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: { 
          fontFamily: 'IBM Plex Sans KR',
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: { 
          fontFamily: 'IBM Plex Sans KR',
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: { 
          fontFamily: 'IBM Plex Sans KR',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: { 
          fontFamily: 'IBM Plex Sans KR',
        },
      },
    },

  },
});