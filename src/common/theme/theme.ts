import { FlexAlignType, FlexStyle, TextStyle } from 'react-native';

export const theme = {
  components: {
    color: {
      primary: {
        green: {
          10: '#e6f6f4',
          20: '#d9f2ef',
          30: '#b0e4dd',
          40: '#00a991',
          50: '#009883',
          60: '#008774',
          70: '#007f6d',
          80: '#006557',
          90: '#004c41',
          100: '#003b33',
        },
        orange: {
          10: '#fff1ef',
          20: '#ffeae7',
          30: '#ffd3cd',
          40: '#ff725e',
          50: '#e66755',
          60: '#cc5b4b',
          70: '#bf5647',
          80: '#994438',
          90: '#73332a',
          100: '#592821',
        },
        gray: {
          10: '#f5f6f7',
          20: '#f0f2f3',
          30: '#dfe4e6',
          40: '#98a7ae',
          50: '#89969d',
          60: '#7a868b',
          70: '#727d83',
          80: '#5b6468',
          90: '#444b4e',
          100: '#353a3d',
        },
      },
    },
    flex: {
      0.5: 0.5,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
    },
    flexDirection: {
      row: 'row' as FlexStyle['flexDirection'],
      column: 'column' as FlexStyle['flexDirection'],
      rowReverse: 'row-reverse' as FlexStyle['flexDirection'],
      columnReverse: 'column-reverse' as FlexStyle['flexDirection'],
    },
    alignItems: {
      center: 'center' as FlexAlignType,
      flexStart: 'flex-start' as FlexAlignType,
      flexEnd: 'flex-end' as FlexAlignType,
      stretch: 'stretch' as FlexAlignType,
    },
    justifyContent: {
      center: 'center' as FlexStyle['justifyContent'],
      flexStart: 'flex-start' as FlexStyle['justifyContent'],
      flexEnd: 'flex-end' as FlexStyle['justifyContent'],
      spaceBetween: 'space-between' as FlexStyle['justifyContent'],
      spaceAround: 'space-around' as FlexStyle['justifyContent'],
      spaceEvenly: 'space-evenly' as FlexStyle['justifyContent'],
    },
    textAlign: {
      auto: 'auto' as TextStyle['textAlign'],
      left: 'left' as TextStyle['textAlign'],
      center: 'center' as TextStyle['textAlign'],
      right: 'right' as TextStyle['textAlign'],
    },
    fontFamily: {
      regular: 'Arimo-Regular',
      italic: 'Arima-Italic',
      medium: 'Arimo-Medium',
      mediumItalic: 'Arimo-MediumItalic',
      semiBold: 'Arimo-SemiBold',
      semiBoldItalic: 'Arimo-SemiBoldItalic',
      bold: 'Arimo-Bold',
      boldItalic: 'Arimo-BoldItalic',
    },
    fontSize: {
      h1: 64,
      h2: 48,
      h3: 36,
      h4: 32,
      h5: 24,
      h6: 20,
      h7: 18,
      h8: 16,
      h9: 14,
      h10: 12,
      h11: 10,
    },
    borderRadius: {
      0: 0,
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 24,
      6: 32,
      7: 40,
      8: 48,
      9: 56,
      10: 64,
      11: 80,
      12: 100,
    },
    borderWidth: {
      0: 0,
      1: 0.5,
      2: 1,
      3: 2,
      4: 3,
      5: 4,
      6: 5,
    },
    spacing: {
      0: 0,
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 24,
      6: 32,
      7: 40,
      8: 48,
      9: 56,
      10: 64,
      11: 80,
      12: 120,
      13: 160,
    },
    opacity: {
      0: 0,
      10: 0.1,
      20: 0.2,
      30: 0.3,
      40: 0.4,
      50: 0.5,
      60: 0.6,
      70: 0.7,
      80: 0.8,
      90: 0.9,
      100: 1,
    },
  },
};