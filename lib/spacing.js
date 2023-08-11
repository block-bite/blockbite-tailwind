function createClampSpacing() {
  const clamp = [
      {
        "size": "0px",
        "slug": "0",
        "name": "0"
      },
      {
        "size": "clamp(16px, 1vw, 32px);",
        "slug": "1",
        "name": "1"
      },
      {
        "size": "clamp(32px, 1vw, 48px);",
        "slug": "2",
        "name": "2"
      },
      {
        "size": "clamp(40px, 1vw, 50px);",
        "slug": "3",
        "name": "3"
      },
      {
        "size": "clamp(64px, 1vw, 80px);",
        "slug": "4",
        "name": "4"
      },
      {
        "size": "clamp(128px, 1vw, 144px);",
        "slug": "5",
        "name": "5"
      },
      {
        "size": "clamp(144px, 1vw, 164px);",
        "slug": "6",
        "name": "6"
      },
      {
        "slug": "8",
        "size": "clamp(16px, 1vw, 32px);",
        "name": "8"
      },
      {
        "slug": "9",
        "size": "clamp(16px, 1vw, 32px);",
        "name": "9"
      },
      {
        "slug": "10",
        "size": "clamp(16px, 1vw, 32px);",
        "name": "10"
      }
  ]
  return clamp;
}


function createGridSpacing() {
  // create grid based on 16px
  const spacing = {};
  // create some minimal values below division of 16
  const minimalValues = [0, 1, 2, 4, 6, 8, 10, 12, 14, 18, 20, 22, 24, 32];
  for (let i = 0; i < minimalValues.length; i++) {
    let minimalValue = minimalValues[i];
    spacing[minimalValue] = minimalValue / 16 + "rem";
  }
  for (let i = 1; i < 1030 / 16; i++) {
    const gridsize = i * 16;
    spacing[gridsize] = i + "rem";
  }
  return spacing;
}

export const gridSpacing = () => {
  // create grid based on 16px
  const spacingRem = createGridSpacing();
  return spacingRem;
};

export const clampSpacing = () => {
  // create grid based on 16px
  const spacingClamp = createClampSpacing();
  return spacingClamp;
};
