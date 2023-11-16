/* eslint-disable no-console */
import { ReactNode, useState } from "react";
import { Escrow, EscrowClient } from "@/contracts/EscrowClient";
import { useWallet } from "@txnlab/use-wallet";

/* Example usage
<EscrowOwnerArbitration
  buttonClass="btn m-2"
  buttonLoadingNode={<span className="loading loading-spinner" />}
  buttonNode="Call ownerArbitration"
  typedClient={typedClient}
/>
*/
type Props = {
  buttonClass: string;
  buttonLoadingNode?: ReactNode;
  buttonNode: ReactNode;
  typedClient: EscrowClient;
};

const EscrowOwnerArbitration = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { activeAddress, signer } = useWallet();
  const sender = { signer, addr: activeAddress! };

  const callMethod = async () => {
    setLoading(true);
    console.log(`Calling ownerArbitration`);
    await props.typedClient.ownerArbitration({}, { sender });
    setLoading(false);
  };

  return (
    <button className={props.buttonClass} onClick={callMethod}>
      {loading ? props.buttonLoadingNode || props.buttonNode : props.buttonNode}
    </button>
  );
};

export default EscrowOwnerArbitration;
