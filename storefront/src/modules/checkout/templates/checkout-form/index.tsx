import { useCheckout } from '@lib/context/checkout-context';
import Addresses from '@modules/checkout/components/addresses';
import Payment from '@modules/checkout/components/payment';
import Shipping from '@modules/checkout/components/shipping';
import StepContainer from '@modules/checkout/components/step-container';
import Spinner from '@modules/common/icons/spinner';

const CheckoutForm = () => {
    const { cart } = useCheckout();

    if (!cart?.id) {
        return null;
    }

    return (
        <div>
            <div className="w-full grid grid-cols-1 gap-y-8">
                <div>
                    {!cart?.payment_session &&
                        <StepContainer index={1} title="Shipping" closedState={
                            <div className="w-100 px-8 pb-8 text-small-regular flex content-center">
                                <Spinner />
                            </div>
                        } />
                    }
                    {cart?.payment_session && <Addresses />}
                </div>

                <div>
                    <Shipping cart={cart} />
                </div>

                <div>
                    <Payment />
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;
