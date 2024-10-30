function createClampSpacing(prefix) {
  const clamp = [
    {
      size: "0px",
      slug: "0",
      name: "0",
    },
    {
      size: "clamp(16px, 1vw, 32px)",
      slug: "1",
      name: "1",
    },
    {
      size: "clamp(32px, 1vw, 48px)",
      slug: "2",
      name: "2",
    },
    {
      size: "clamp(40px, 1vw, 50px)",
      slug: "3",
      name: "3",
    },
    {
      size: "clamp(64px, 1vw, 80px)",
      slug: "4",
      name: "4",
    },
    {
      size: "clamp(128px, 1vw, 144px)",
      slug: "5",
      name: "5",
    },
    {
      size: "clamp(144px, 1vw, 164px)",
      slug: "6",
      name: "6",
    },
    {
      slug: "8",
      size: "clamp(16px, 1vw, 32px)",
      name: "8",
    },
    {
      slug: "9",
      size: "clamp(16px, 1vw, 32px)",
      name: "9",
    },
    {
      slug: "10",
      size: "clamp(16px, 1vw, 32px)",
      name: "10",
    },
  ];

  const ClampSizes = {};
  // add clamp spacing for gaps
  clamp.forEach((size) => {
    // add to spacing
    ClampSizes[prefix + "clamp-" + size.slug] = size.size;
  });

  return ClampSizes;
}

function createPercentSpacing(prefix) {
  const percentUnits = [
    "1/2",
    "1/3",
    "2/3",
    "1/4",
    "2/4",
    "3/4",
    "1/5",
    "2/5",
    "3/5",
    "4/5",
    "1/6",
    "2/6",
    "3/6",
    "4/6",
    "5/6",
    "1/12",
    "2/12",
    "3/12",
    "4/12",
    "5/12",
    "6/12",
    "7/12",
    "8/12",
    "9/12",
    "10/12",
    "11/12",
    "full",
  ];
  return percentUnits;
}
function createScreenSpacing() {
  const screenSpacing = [
    "b_screen-10",
    "b_screen-20",
    "b_screen-30",
    "b_screen-40",
    "b_screen-50",
    "b_screen-60",
    "b_screen-70",
    "b_screen-80",
    "b_screen-90",
    "b_screen-100",
  ];

  const screenSpacingValues = {};
  screenSpacing.forEach((size) => {
    screenSpacingValues[size] = size;
  });
  return screenSpacingValues;
}

function createGridSpacing(prefix) {
  // create grid based on 16px
  const gridSpacing = {};

  const minimalValues = [0, 1, 2, 4, 6, 8, 10, 12, 14, 18, 20, 22, 24, 32];
  for (let i = 0; i < minimalValues.length; i++) {
    let minimalValue = minimalValues[i];
    gridSpacing[`${prefix}${minimalValue}`] = minimalValue / 16 + "rem";
  }
  for (let i = 1; i < 1280 / 16; i++) {
    const gridsize = i * 16;
    gridSpacing[`${prefix}${gridsize}`] = i + "rem";
  }
  return gridSpacing;
}

function createNativeSpacing() {
  const nativeSpacing = [
    0,
    "px",
    0.5,
    1,
    1.5,
    2,
    2.5,
    3,
    3.5,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    14,
    16,
    20,
    24,
    28,
    32,
    36,
    40,
    44,
    48,
    52,
    56,
    60,
    64,
    72,
    80,
    96,
  ];
  return nativeSpacing;
}

function createSpanSpacing() {
  const colSpanValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return colSpanValues;
}

export const gridSpacing = (prefix = "") => {
  // create grid based on 16px
  const spacingRem = createGridSpacing(prefix);
  return spacingRem;
};

export const clampSpacing = (prefix = "") => {
  const spacingClamp = createClampSpacing(prefix);
  return spacingClamp;
};

export const percentSpacing = () => {
  const spacingPercent = createPercentSpacing();
  return spacingPercent;
};

export const screenSpacing = () => {
  const spacingScreen = createScreenSpacing();
  return spacingScreen;
};

export const nativeSpacing = () => {
  const spacingNative = createNativeSpacing();
  return spacingNative;
};

export const spanSpacing = () => {
  const spacingSpan = createSpanSpacing();
  return spacingSpan;
};

export const getGridClampSpacing = (prefix = "b_") => {
  const allSpacing = Object.assign(
    createGridSpacing(prefix),
    clampSpacing(prefix)
  );
  return allSpacing;
};
