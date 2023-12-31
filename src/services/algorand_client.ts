import algosdk from "algosdk";

export const supportedNetworks: any = {
  localhost: {
    algod: {
      token: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      server: "http://localhost",
      port: 4001,
    },
    indexer: {
      token: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      server: "http://localhost",
      port: 4002,
    },
  },
  testnet: {
    algod: {
      // token: "L8aqpbBiwS55OTYOFpFsK9BCBhjaFSRb2p9D1Vdf",
      token: "",
      // server: "https://testnet-algorand.api.purestake.io/ps2",
      server: "https://testnet-api.algonode.cloud",
      port: 443,
    },
    indexer: {
      // token: "L8aqpbBiwS55OTYOFpFsK9BCBhjaFSRb2p9D1Vdf",
      token: "",
      // server: "https://testnet-algorand.api.purestake.io/idx2",
      server: "	https://testnet-idx.algonode.cloud",
      port: 443,
    },
  },
  mainnet: {
    algod: {
      // token: "L8aqpbBiwS55OTYOFpFsK9BCBhjaFSRb2p9D1Vdf",
      token: "",
      server: "	https://mainnet-api.algonode.cloud",
      port: 443,
    },
    indexer: {
      // token: "L8aqpbBiwS55OTYOFpFsK9BCBhjaFSRb2p9D1Vdf",
      token: "",
      server: "https://mainnet-idx.algonode.cloud",
      port: 443,
    },
  },
};

export class AlgorandClient {
  static algodInstance: any;
  static indexerInstance: any;

  static connectAlgod(network: string) {
    try {
      const algodClient = new algosdk.Algodv2(
        // network === "localhost"
        //   ? supportedNetworks[network]?.algod.token
        //   : {
        //       "X-API-key": supportedNetworks[network]?.algod.token,
        //     },
        supportedNetworks[network]?.algod.token,
        supportedNetworks[network]?.algod.server,
        supportedNetworks[network]?.algod.port
      );

      AlgorandClient.algodInstance = algodClient;
    } catch (err: any) {
      console.log(err.stack);
    }
  }

  static setAlgod(network: string) {
    AlgorandClient.connectAlgod(network);
  }

  static async connectIndexer(network: string) {
    try {
      const indexerClient = new algosdk.Indexer(
        // network === "localhost"
        //   ? supportedNetworks[network]?.indexer.token
        //   : {
        //       "X-API-key": supportedNetworks[network]?.indexer.token,
        //     },
        supportedNetworks[network]?.indexer.token,
        supportedNetworks[network]?.indexer.server,
        supportedNetworks[network]?.indexer.port
      );

      AlgorandClient.indexerInstance = indexerClient;
    } catch (err: any) {
      console.log(err.stack);
    }
  }

  static setIndexer(network: string) {
    AlgorandClient.connectIndexer(network);
  }

  static getAlgod(network: string): algosdk.Algodv2 {
    if (AlgorandClient.algodInstance) {
      return AlgorandClient.algodInstance;
    } else {
      // console.log("connectAlgod");

      AlgorandClient.connectAlgod(network);
      return AlgorandClient.algodInstance;
    }
  }

  static getIndexer(network: string): algosdk.Indexer {
    if (AlgorandClient.indexerInstance) {
      return AlgorandClient.indexerInstance;
    } else {
      // console.log("connectIndexer");

      AlgorandClient.connectIndexer(network);
      return AlgorandClient.indexerInstance;
    }
  }
}
