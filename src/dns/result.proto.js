module.exports = `
message Delegation {
  repeated bytes Keys = 1;
  repeated bytes Digests = 2;

  bytes KeySig = 3;
  bytes DigestSig = 4;
}

message Result {
  repeated Delegation Delegations = 1;

  repeated bytes Keys = 2;
  repeated bytes Data = 3;

  bytes KeySig = 4;
  bytes DataSig = 5;
}
`
