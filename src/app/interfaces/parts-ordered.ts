export interface PartsOrdered {
    id: string;
    partOrdered: {
        id: string;
        partName;
    };
    qtyOrdered: number;
    costEach: string;
    purchaseOrder: {
        id: string;
    };
}
