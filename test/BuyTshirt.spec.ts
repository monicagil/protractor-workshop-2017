import { browser } from 'protractor';
import { MenuContentPage } from '../src/page';
import { OrderResumePage } from '../src/page';
import { ProductDetailPage } from '../src/page';
import { ProductAddedModalPage } from '../src/page';
import { SummaryStepPage } from '../src/page';
import { SignInStepPage } from '../src/page';
import { AddressStepPage } from '../src/page';
import { ShippingStepPage } from '../src/page';
import { PaymentStepPage } from '../src/page';
import { BankPaymentPage } from '../src/page';
import { ProductListPage } from '../src/page';

describe('Open page', () => {
    beforeAll(async () => {
        await browser.get('http://automationpractice.com/');
    });

    describe('buy a item', () => {
        beforeAll(async () => {
            const menuContentPage: MenuContentPage = new MenuContentPage();
            const orderResumePage: OrderResumePage = new OrderResumePage();
            const productDetailPage: ProductDetailPage = new ProductDetailPage();
            const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
            const summaryStepPage: SummaryStepPage = new SummaryStepPage();

            await menuContentPage.goToTShirtMenu();
            await orderResumePage.selectProduct('Faded Short Sleeve T-shirts');
            await productDetailPage.goToAddToCar();
            await productAddedModalPage.goToCheckout();
            await summaryStepPage.goToProceedToCheckout();
        });

        describe('login to the app', () => {
            beforeAll(async () => {
                const signInStepPage: SignInStepPage = new SignInStepPage();
                await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
            });
            describe('select address', () => {
                beforeAll(async () => {
                    const addressStepPage: AddressStepPage = new AddressStepPage();
                    await addressStepPage.goToReviewAddress();
                });
                describe('pay', () => {
                    beforeAll(async () => {
                        const shippingStepPage: ShippingStepPage = new ShippingStepPage();
                        const paymentStepPage: PaymentStepPage = new PaymentStepPage();
                        const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

                        await shippingStepPage.acceptShipping();
                        await paymentStepPage.goTopaymentOption();
                        await bankPaymentPage.goToconfirm();
                    });
                    it('perfect!!! it is mine', async () => {
                        const productListPage: ProductListPage = new ProductListPage();
                        await expect(productListPage.getOrderText()).toBe('Your order on My Store is complete.');
                    });
                });
            });
        });
    });
});
