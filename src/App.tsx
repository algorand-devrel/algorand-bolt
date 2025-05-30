import {
  NetworkId,
  WalletId,
  WalletManager,
  WalletProvider,
} from '@txnlab/use-wallet-react'
import { WalletUIProvider, WalletButton } from '@txnlab/use-wallet-ui-react'
import { WalletInfo } from './components/WalletInfo'
import { TextWithCopy } from './components/TextWithCopy'

const walletManager = new WalletManager({
  wallets: [
    WalletId.PERA,
    WalletId.DEFLY,
    WalletId.LUTE,
    WalletId.EXODUS,
    {
      id: WalletId.WALLETCONNECT,
      options: { projectId: 'fcfde0713d43baa0d23be0773c80a72b' },
    },
  ],
  defaultNetwork: NetworkId.TESTNET,
})

function App() {
  return (
    <WalletProvider manager={walletManager}>
      <WalletUIProvider>
        <div className="min-h-screen bg-white dark:bg-[#001324] text-gray-900 dark:text-gray-100">
          {/* Header */}
          <header className="w-full bg-white dark:bg-gray-800/30 border-b border-gray-200 dark:border-gray-700/50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                  <span className="text-lg font-semibold ">
                    Algorand React Starter
                  </span>
                </div>
                <div>
                  <WalletButton />
                </div>
              </div>
            </div>
          </header>
          {/* Main content area */}
          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <WalletInfo />
            <div className="mt-8">
            <h1 className="text-3xl font-bold  mb-4">Algorand Resources</h1>
              <div className="flex flex-col gap-2 my-4">
                <p className=" mx-auto">
                  This example demonstrates a foundation for building a web app
                  with connectivity to the Algorand blockchain. It includes
                  prompts to guide Bolt in building with you. The instructions
                  and resources below can be ripped out as you start crafting
                  your own app. Note that  the AlgoKit Subscriber and Utils libraries 
                  are available in both TypeScript and Python.
                </p>
              </div>  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg">
                  <h2 className="text-xl font-semibold mb-3">Learning Resources</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="https://dev.algorand.co/" 
                         className="text-blue-500 hover:underline" target="_blank">
                        Developer Portal & Docs
                      </a>
                    </li>
                    <li>
                      <a href="https://examples.dev.algorand.co/" 
                         className="text-blue-500 hover:underline" target="_blank">
                        Example Gallery
                      </a>
                    </li>
                    <li>
                      <a href="https://tutorials.dev.algorand.co/" 
                         className="text-blue-500 hover:underline" target="_blank">
                        Interactive AlgoKit Code Tutorials
                      </a>
                    </li>
                    <li>
                      <a href="https://dev.algorand.co/arc-standards/" 
                         className="text-blue-500 hover:underline" target="_blank">
                        ARC Standards
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg">
                  <h2 className="text-xl font-semibold mb-3">Core Tools</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="https://dev.algorand.co/algokit/algokit-intro/" 
                         className="text-blue-500 hover:underline" target="_blank">
                        AlgoKit Developer Kit
                      </a>
                    </li>
                    <li>
                      <a href="https://lora.algokit.io/" 
                         className="text-blue-500 hover:underline" target="_blank">
                        Lora Block Explorer
                      </a>
                    </li>
                    <li>
                      <a href="https://www.npmjs.com/package/@algorandfoundation/algokit-utils" 
                         className="text-blue-500 hover:underline" target="_blank">
                        AlgoKit Utils (v9.0.1)
                      </a>
                    </li>
                    <li>
                      <a href="https://www.npmjs.com/package/@algorandfoundation/algokit-subscriber" 
                         className="text-blue-500 hover:underline" target="_blank">
                        AlgoKit Subscriber (v3.2.0) 
                      </a>
                    </li>
                    <li>
                      <a href="https://www.npmjs.com/package/@txnlab/use-wallet-ui-react" 
                         className="text-blue-500 hover:underline" target="_blank">
                        use-wallet-ui-react (v0.2.2)
                      </a>
                    </li>
                  </ul>
                </div>


                <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg">
                  <h2 className="text-xl font-semibold mb-3">Community</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="https://discord.com/invite/algorand" 
                         className="text-blue-500 hover:underline" target="_blank">
                        Algorand Discord
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-lg">
                  <h2 className="text-xl font-semibold mb-3">Smart Contract Languages</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="https://dev.algorand.co/algokit/languages/python/overview/" 
                         className="text-blue-500 hover:underline" target="_blank">
                        Algorand Python
                      </a>
                    </li>
                    <li>
                      <a href="https://dev.algorand.co/algokit/languages/typescript/overview/" 
                         className="text-blue-500 hover:underline" target="_blank">
                        Algorand Typescript
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="my-8">
              <h1 className="text-3xl font-bold my-8">Bolt.new Integration Guide</h1>
              <div className="flex flex-col gap-4 my-4">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <h2 className="text-xl font-semibold mb-2">Initial Setup Prompt</h2>
                  <p className="mb-2">Use this in discussion mode to configure Bolt for Algorand development:</p>
                  <TextWithCopy text={`I'm building an Algorand dApp using these specific packages:
- @algorandfoundation/algokit-utils v9.0.1 for blockchain interactions
- @txnlab/use-wallet-ui-react v0.2.2 for wallet connectivity
- @perawallet/connect for Pera Wallet support
- lute-connect for Lute Wallet support

Do not use the algosdk JavaScript library directly. All code should use TypeScript and modern React patterns. The application should support both MainNet and TestNet.`} />
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h2 className="text-xl font-semibold mb-2">Common Use Case Prompts</h2>
                  <div className="space-y-3">
                      <h3 className="font-medium">Transaction Sending</h3>
                      <TextWithCopy text={`Implement a payment transaction form using algokit-utils that lets users send ALGO to another address. Include amount input, recipient input, network selection, and transaction status tracking.`} />
                    </div>
                    <div>
                      <h3 className="font-medium">Account Management</h3>
                      <TextWithCopy text={`Add a React component for network switcher and assets owned by that address using @txnlab/use-wallet-react and @algorandfoundation/algokit-utils.`} />
                    </div>
                    <div>
                    <div>
                      <h3 className="font-medium">Contract Interaction</h3>
                      <TextWithCopy text={`Create an ABI method caller component that can interact with an Algorand smart contract. Use algokit-utils for the contract interaction and display the results. Support both MainNet and TestNet.`} />
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h2 className="text-xl font-semibold mb-2">AlgoKit Implementation Note</h2>
                  <p>Because Bolt.new doesn't support AlgoKit LocalNet, you can use this workaround:</p>
                  <TextWithCopy text={`When you need to use AlgoKit functionality to develop a smart contract and compile it using an Algorand node, I'll provide the specific code implementations based on the @algorandfoundation/algokit-utils documentation. For now, focus on the UI components and wallet integration using @txnlab/use-wallet-react, and I'll handle the AlgoKit parts separately.`} />
                </div>
              </div>
            </div>
          </main>
        </div>
      </WalletUIProvider>
    </WalletProvider>
  )
}

export default App