import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ButtonLink from "@/common/ButtonLink";

const Order = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-12 p-12 text-8xl text-red-500">
      <FontAwesomeIcon icon={["fas", "power-off"]} />
      <p className="text-4xl font-bold text-black italic text-center">
        The Order Site is not available ! ! !
      </p>

      <div className="text-black text-2xl italic">
        <ButtonLink
          label="Back to Home"
          href="/"
        />
      </div>
    </div>
  );
};

export default Order;
