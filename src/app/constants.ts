import { getContract } from "thirdweb";
import { client } from "./client";
import { sepolia } from "thirdweb/chains";

const contractAddress = "0x6AD3947a654D5285ce28b9c18fe5cAA7CA2CFB52";

export const CONTRACT = getContract({
  client: client,
  chain: sepolia,
  address: contractAddress,
});
