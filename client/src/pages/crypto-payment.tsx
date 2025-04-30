import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiLitecoin, SiRipple, SiDogecoin } from "react-icons/si";
import SeoHead from "@/components/shared/SeoHead";
import PageHero from "@/components/shared/PageHero";

// Sample crypto addresses - would be replaced with actual company addresses
const CRYPTO_ADDRESSES = {
  bitcoin: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  ethereum: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  litecoin: "ltc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  ripple: "rEb8TK3gBgk5auZkwc6sHnwrGVJH8DuaLh",
  dogecoin: "D8K3GPUQNNmHqS9sWjji8J8HbRpZQ6vgwZ"
};

interface CryptoOption {
  value: keyof typeof CRYPTO_ADDRESSES;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const CRYPTO_OPTIONS: CryptoOption[] = [
  { 
    value: "bitcoin", 
    label: "Bitcoin (BTC)", 
    icon: <FaBitcoin className="text-[#f7931a]" />,
    color: "#f7931a"
  },
  { 
    value: "ethereum", 
    label: "Ethereum (ETH)", 
    icon: <FaEthereum className="text-[#627eea]" />,
    color: "#627eea"
  },
  { 
    value: "litecoin", 
    label: "Litecoin (LTC)", 
    icon: <SiLitecoin className="text-[#345d9d]" />,
    color: "#345d9d" 
  },
  { 
    value: "ripple", 
    label: "XRP (Ripple)", 
    icon: <SiRipple className="text-[#006097]" />,
    color: "#006097"
  },
  { 
    value: "dogecoin", 
    label: "Dogecoin (DOGE)", 
    icon: <SiDogecoin className="text-[#c3a634]" />,
    color: "#c3a634"
  }
];

export default function CryptoPayment() {
  const [selectedCrypto, setSelectedCrypto] = useState<keyof typeof CRYPTO_ADDRESSES>("bitcoin");
  const [amount, setAmount] = useState<string>("");
  const [copied, setCopied] = useState(false);
  
  const selectedOption = CRYPTO_OPTIONS.find(option => option.value === selectedCrypto);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(CRYPTO_ADDRESSES[selectedCrypto]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <>
      <SeoHead
        title="Crypto Payment | Octela + Rigo"
        description="Pay for our services using various cryptocurrencies including Bitcoin, Ethereum, and more."
        keywords={["crypto payment", "bitcoin payment", "ethereum payment", "business solutions"]}
        path="/crypto-payment"
      />
      
      <PageHero
        title="Pay with Cryptocurrency"
        description="Fast, secure, and private payment options using your favorite cryptocurrencies"
        bgImage="https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="border border-[#e52630]">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Cryptocurrency Payment</CardTitle>
                <CardDescription className="text-center">
                  Select a cryptocurrency and send the payment to the provided address
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Cryptocurrency</label>
                    <Select 
                      value={selectedCrypto} 
                      onValueChange={(value) => setSelectedCrypto(value as keyof typeof CRYPTO_ADDRESSES)}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a cryptocurrency" />
                      </SelectTrigger>
                      <SelectContent>
                        {CRYPTO_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value} className="flex items-center">
                            <div className="flex items-center">
                              <span className="mr-2">{option.icon}</span>
                              {option.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Amount (USD)</label>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      min="0"
                      step="0.01"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      * The cryptocurrency equivalent will be calculated at the current exchange rate
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg" style={{ backgroundColor: `${selectedOption?.color}20` }}>
                    <div className="flex items-center mb-2">
                      <span className="mr-2">{selectedOption?.icon}</span>
                      <span className="font-bold">{selectedOption?.label} Payment Address</span>
                    </div>
                    <div className="flex items-center">
                      <code className="bg-background p-3 rounded text-sm flex-1 overflow-x-auto">
                        {CRYPTO_ADDRESSES[selectedCrypto]}
                      </code>
                      <Button 
                        variant="outline" 
                        className="ml-2 whitespace-nowrap"
                        onClick={handleCopy}
                      >
                        {copied ? "Copied!" : "Copy Address"}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-center text-sm text-gray-500">
                  <p>After sending payment, please email the transaction ID to <span className="text-[#e52630]">payments@octelaxrigo.com</span> with your order details</p>
                </div>
                <div className="flex justify-center">
                  <Button className="bg-[#e52630] text-white hover:bg-black">
                    I've Sent the Payment
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}