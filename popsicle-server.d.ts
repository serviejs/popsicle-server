declare function popsicleServer (app: (req: any, res: any) => any): (req: any, next: () => any) => any;

export = popsicleServer;
