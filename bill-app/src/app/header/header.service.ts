export class HeaderService {
    private total = [0];

    addPrice(price: number) {
        this.total.push(price);
    }

    getPrice() {
        return [...this.total];
    }
}