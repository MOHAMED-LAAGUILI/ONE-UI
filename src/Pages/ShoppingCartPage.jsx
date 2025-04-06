import  SharpCard  from "@Components/BodyCard";
import { Check, FullscreenIcon, ShoppingBag } from "lucide-react";
import CartEmpty from "@Components/Shopping/CartEmpty";
import CartFull from "@Components/Shopping/CartFull";
import SuccessPage from "@Components/Shopping/Success";

export function ShoppingCartPage() {
  return (
    <>
      <SharpCard title="Full Cart" Icon={ShoppingBag}>
        <CartFull />
      </SharpCard>
      <SharpCard title="Empty cart" Icon={FullscreenIcon}>
        <CartEmpty />
      </SharpCard>
      <SharpCard title="Success Checkout" Icon={Check}>
        <SuccessPage />
      </SharpCard>
    </>
  );
}
