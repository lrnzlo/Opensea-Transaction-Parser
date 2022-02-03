import { GetTransactionData, DecodeTransactionInfo } from '../src/index';
import {config} from 'dotenv-safe';
config();

describe('Should return a transaction description from Opensea', () => {
  test('Should Work', async () => {
    jest.useFakeTimers('legacy');
    
    return GetTransactionData('0xa52ca3611ad3ea1aa566dd605e24c25b6bc601eabf0969076eebc85df644a1d8', process.env.EtherscanApiKey).then(TrxData => {
      DecodeTransactionInfo(TrxData.logs).then(res => {
        expect(res).toEqual({
          Seller: '0xD809BBDe36CB8df835070353EBB515b597211a3B',
          Buyer: '0x2a838fB71A5C6987bf09123CA65841874a663444',
          NftId: '6188',
          NftCollection: {
            Address: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
            Name: 'BoredApeYachtClub'
          },
          Price: '79.5ETH',
          Royalty: {
            val: '3.975ETH',
            collector: '0x5b3256965e7C3cF26E11FCAf296DfC8807C01073'
          }
        });
      });
    
    });
  });
});