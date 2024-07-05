import { StreamClient } from "@stream-io/node-sdk";

const apiKey = "2j6ed86mbj2t";
const secret = "m444tu52g5crxz8y6h39f8ptsxvhdjpz2psnfckbve4mmvk2dsnem9whgkdq4b3v";

export const client = new StreamClient(apiKey, secret);
