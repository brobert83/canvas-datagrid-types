declare module "canvas-datagrid" {
  type CanvasDatagridData = any[][] | Record<string, any>[];

  interface CanvasDatagridFilterFunction {
    (cell: any, row: number, column: number): boolean;
  }

  interface CanvasDatagridSorterFunction {
    (a: any, b: any, columnIndex: number, column: any): number;
  }

  interface CanvasDatagridFormatterFunction {
    (cell: any, row: number, column: number, cellValue: any): string;
  }

  interface CanvasDatagridColumn {
    name: string;
    title?: string;
    type?: string;
    width?: number;
    hidden?: boolean;
    filter?: CanvasDatagridFilterFunction;
    formatter?: CanvasDatagridFormatterFunction;
    sorter?: CanvasDatagridSorterFunction;
    // Add other properties based on the types.d.ts file
  }

  interface CanvasDatagridOptions {
    parentNode?: HTMLElement;
    data: CanvasDatagridData;
    columns?: CanvasDatagridColumn[];
    // Add other options based on the types.d.ts file
  }

  interface CanvasDatagridRowHeader {
    style: string;
    backgroundColor: string;
    foregroundColor: string;
    // Add other properties based on the types.d.ts file
  }

  interface CanvasDatagridConfig {
    defaults: {
      contextmenu: string[];
      "autosize-columns": boolean;
      "font-family": string;
      "font-size": string;
      "debug": boolean;
      // Add other default configurations based on the types.d.ts file
    };
    renderOverrides: {
      cell: (ctx: CanvasRenderingContext2D, cell: any, bounds: any, grid: any, column: any, row: number) => void;
      // Add other render overrides based on the types.d.ts file
    };
    // Add other config properties based on the types.d.ts file
  }

  interface CanvasDatagridFilter {
    operator: string;
    value: any;
  }

  export function canvasDatagrid(options: CanvasDatagridOptions): any;
  export const filter: CanvasDatagridFilterFunction;
  export const sorter: CanvasDatagridSorterFunction;
  export const formatter: CanvasDatagridFormatterFunction;
  export const columnFilters: Record<string, CanvasDatagridFilter>;
  export const defaults: CanvasDatagridConfig["defaults"];
  export const renderOverrides: CanvasDatagridConfig["renderOverrides"];
  export const config: CanvasDatagridConfig;
  export const rowHeader: CanvasDatagridRowHeader;

  // Add other missing properties and methods from the types.d.ts file
  interface CanvasDatagrid {
    addEventListener(type: string, listener: Function, useCapture?: boolean): void;
    removeEventListener(type: string, listener: Function, useCapture?: boolean): void;
    dispatchEvent(event: Event): boolean;
    change(options: Partial<CanvasDatagridOptions>): void;
    getScrollHeight(): number;
    getScrollWidth(): number;
    // Add other missing methods from the types.d.ts file
  }

  export default CanvasDatagrid;
}
