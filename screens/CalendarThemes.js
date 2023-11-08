export const JanuaryTheme = {
    calendarBackground: '#7CC7F8',
    textSectionTitleColor: 'white',
    dayTextColor: 'white',
    todayTextColor: 'white',
    selectedDayTextColor: 'white',
    monthTextColor: 'white',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  };
  
export const FebruaryTheme = {
    calendarBackground: '#FE7BE1 ',
    textSectionTitleColor: 'white',
    dayTextColor: 'white',
    todayTextColor: 'white',
    selectedDayTextColor: 'white',
    monthTextColor: 'white',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  };

  export const MarchTheme = {
    calendarBackground: '#50C878',
    textSectionTitleColor: 'white',
    dayTextColor: 'white',
    todayTextColor: 'white',
    selectedDayTextColor: 'white',
    monthTextColor: 'white',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  };

  export const AprilTheme = {
    calendarBackground: '#FFFFE0',
    textSectionTitleColor: 'black',
    dayTextColor: 'black',
    todayTextColor: 'black',
    selectedDayTextColor: 'black',
    monthTextColor: 'black',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  };

  export const MayTheme = {
    calendarBackground: '#FFFDD0',
    textSectionTitleColor: 'black',
    dayTextColor: 'black',
    todayTextColor: 'black',
    selectedDayTextColor: 'black',
    monthTextColor: 'black',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  };

  export const JuneTheme = {
    calendarBackground: '#FBCEB1',
    textSectionTitleColor: 'white',
    dayTextColor: 'white',
    todayTextColor: 'white',
    selectedDayTextColor: 'white',
    monthTextColor: 'white',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  };

  export const JulyTheme = {
    calendarBackground: '#FF7F50',
    textSectionTitleColor: 'white',
    dayTextColor: 'white',
    todayTextColor: 'white',
    selectedDayTextColor: 'white',
    monthTextColor: 'white',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  };

  export const AugustTheme = {
    calendarBackground: '#CC5500',
    textSectionTitleColor: 'white',
    dayTextColor: 'white',
    todayTextColor: 'white',
    selectedDayTextColor: 'white',
    monthTextColor: 'white',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  };

  export const SeptemberTheme = {
    calendarBackground: '#6E260E',
    textSectionTitleColor: 'white',
    dayTextColor: 'white',
    todayTextColor: 'white',
    selectedDayTextColor: 'white',
    monthTextColor: 'white',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  };

  export const OctoberTheme = {
    calendarBackground: '#800000',
    textSectionTitleColor: 'white',
    dayTextColor: 'white',
    todayTextColor: 'white',
    selectedDayTextColor: 'white',
    monthTextColor: 'white',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  };

  export const NovemberTheme = {
    calendarBackground: '#8B4513',
    textSectionTitleColor: 'white',
    dayTextColor: 'white',
    todayTextColor: 'white',
    selectedDayTextColor: 'white',
    monthTextColor: 'white',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  };

  export const DecemberTheme = {
    calendarBackground: '#228B22',
    textSectionTitleColor: 'white',
    dayTextColor: 'white',
    todayTextColor: 'white',
    selectedDayTextColor: 'white',
    monthTextColor: 'white',
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  };

  export const getCalendarTheme = (currentMonth) => {
    switch (currentMonth) {
        case 0: return JanuaryTheme;
        case 1: return FebruaryTheme;
        case 2: return MarchTheme;
        case 3: return AprilTheme;
        case 4: return MayTheme;
        case 5: return JuneTheme;
        case 6: return JulyTheme;
        case 7: return AugustTheme;
        case 8: return SeptemberTheme;
        case 9: return OctoberTheme;
        case 10: return NovemberTheme;
        case 11: return DecemberTheme;
        default: return JanuaryTheme;
    };
};

