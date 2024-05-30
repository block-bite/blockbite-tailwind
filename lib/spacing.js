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

export const gridSpacing = (prefix) => {
  // create grid based on 16px
  const spacingRem = createGridSpacing(prefix);
  return spacingRem;
};

export const clampSpacing = (prefix) => {
  // create grid based on 16px
  const spacingClamp = createClampSpacing(prefix);
  return spacingClamp;
};

export const nativeSpacing = () => {
  const values = [
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
  return values;
};

export const getSpacing = (prefix = "b_") => {
  const allSpacing = Object.assign(createGridSpacing(prefix), clampSpacing(prefix), nativeSpacing());
  return allSpacing;
};
