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

describe('Buy a t-shirt', () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const orderResumePage: OrderResumePage = new OrderResumePage();
    const productDetailPage: ProductDetailPage = new ProductDetailPage();
    const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
    const summaryStepPage: SummaryStepPage = new SummaryStepPage();
    const signInStepPage: SignInStepPage = new SignInStepPage();
    const addressStepPage: AddressStepPage = new AddressStepPage();
    const shippingStepPage: ShippingStepPage = new ShippingStepPage();
    const paymentStepPage: PaymentStepPage = new PaymentStepPage();
    const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
    const productListPage: ProductListPage = new ProductListPage();

    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
    });

    it('then should be bought a t-shirt', async () => {
        await browser.get('http://automationpractice.com/');
        await (browser.sleep(3000));
        await menuContentPage.goToTShirtMenu();
        await (browser.sleep(3000));
        await orderResumePage.goToSelect()
        await (browser.sleep(3000));
        await productDetailPage.goToAddToCar();
        await (browser.sleep(3000));
        await productAddedModalPage.goToCheckout();
        await (browser.sleep(5000));
        await summaryStepPage.goToProceedToCheckout();
        await (browser.sleep(5000));
        await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
        await (browser.sleep(3000));
        await addressStepPage.goToReviewAddress();
        await (browser.sleep(3000));
        await shippingStepPage.acceptShipping();
        await (browser.sleep(3000));
        await paymentStepPage.goTopaymentOption();
        await (browser.sleep(3000));
        await bankPaymentPage.goToconfirm();
        await (browser.sleep(3000));
        await expect(productListPage.getOrderText()).toBe('Your order on My Store is complete.');
    });
});
