// index.d.ts
declare module "blockbite-tailwind" {
  export function getAspectRatio(...args: any[]): any;
  export function getContainer(...args: any[]): any;
  export function getGridClampSpacing(...args: any[]): any;
  export function getScreens(...args: any[]): any;
  export function getColors(...args: any[]): any;
  export function getColorObject(...args: any[]): any;
  export function themeParser(...args: any[]): any;

  export const gridSpacing: any;
  export const clampSpacing: any;
  export const screenSpacing: any;
  export const percentSpacing: any;
  export const nativeSpacing: any;
  export const spanSpacing: any;
}
