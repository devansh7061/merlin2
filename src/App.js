import Logo from "./images/download.jpeg";
import Path from "./images/path.svg";
import Group from "./images/book-2.svg";
import Summarize from "./images/quote.svg";
import Expand from "./images/blockquote.svg";
import Wand from "./images/wand.svg";
import Paraphrase from "./images/volume.svg";
import Simplify from "./images/mood-kid.svg";
import Explain from "./images/question-mark.svg";
import Translate from "./images/language.svg";
import Background from "./images/bg.svg";
import LeftArrow from "./images/arrow-left.svg";
import RightArrow from "./images/arrow-right.svg";
import Copy from "./images/copy.svg";
import Refresh from "./images/refresh.svg";
import Chrome from "./images/Frame.svg";
import Firefox from "./images/firefox.svg";
import useContextStore from "./contextStore";
import {
  Box,
  Center,
  Image,
  HStack,
  VStack,
  Heading,
  Text,
  Input,
  InputGroup,
  InputRightAddon,
  Divider,
} from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";

function App() {
  const response = useRef("")
  const textRef = useRef()
  
  // if (textRef.current != undefined) {
  //   console.log(textRef.current.innerText);
  // }
  const handleClick = () => {
    console.log(textRef.current.innerText);
    const sse = new EventSource(
      "https://take-home-endpoints-yak3s7dv3a-el.a.run.app/sse",
      { withCredentials: false }
    );
    function getRealTimeData(data) {
      try {
        // console.log(data.choices[0].text);
        textRef.current.innerText = textRef.current.innerText + data.choices[0].text;
        // console.log(response.current);
      } catch (error) {
        sse.close();
        console.log("done");
        console.log(response.current);
      }
    }
    sse.onmessage = (e) => getRealTimeData(JSON.parse(e.data));
    sse.onopen = (e) => {
      console.log(e);
    };
    sse.onerror = (e) => {
      console.log(e);
    };
  };
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        height: "100vh",
        width: "100%",
      }}
    >
      <Center>
        <HStack marginTop="10.4375rem">
          <Image src={Logo} boxSize="2.75rem"></Image>
          <Heading color="#FFFFFF" paddingTop="0.3125rem">
            Merlin
          </Heading>
        </HStack>
      </Center>
      <Center>
        <div className="tagLine">
          <VStack spacing="0.3125rem" marginTop="1.25rem">
            <Text color="#FFFFFF">
              Unleash the power of creativity with Merlin, the
            </Text>
            <Text color="#FFFFFF">
              ultimate tool for marketers! Say goodbye
            </Text>
          </VStack>
        </div>
      </Center>
      <Center>
        <Box
          bg="#1e293b"
          w="52.625rem"
          h="3rem"
          borderRadius="0.5rem"
          borderColor="#e62fde"
          borderWidth="0.125rem"
          marginTop="4.375rem"
        >
          <InputGroup paddingLeft="1.25rem" paddingTop="0.1875rem">
            <Input
              placeholder="Ask Merlin"
              variant="unstyled"
              color="#94A3B8"
            ></Input>
            <InputRightAddon variant="unstyled" bg="#fffff" borderWidth="0px">
              <button>
                <Image src={Path} onClick={handleClick}></Image>
              </button>
            </InputRightAddon>
          </InputGroup>
        </Box>
      </Center>
      <Center>
        <Text
          fontSize="0.75rem"
          color="#94A3B8"
          fontWeight="600"
          lineHeight="1rem"
          marginTop="0.625rem"
          marginBottom="0.625rem"
        >
          Frequently Commands
        </Text>
      </Center>
      <Center>
        <HStack>
          <HStack bg="#64748B" borderRadius="4px" w="90px" h="22px">
            <Text
              fontSize="0.75rem"
              fontWeight="400"
              lineHeight="1rem"
              color="#F1F5F9"
              paddingLeft="0.625rem"
            >
              Grammar
            </Text>
            <Image src={Group}></Image>
          </HStack>
          <HStack
            bg="#64748B"
            borderRadius="0.25rem"
            w="6.25rem"
            h="1.375rem"
            spacing="0.25rem"
          >
            <Text
              fontSize="0.75rem"
              fontWeight="400"
              lineHeight="1rem"
              color="#F1F5F9"
              paddingLeft="0.8125rem"
            >
              Summarize
            </Text>
            <Image src={Summarize}></Image>
          </HStack>
          <HStack bg="#64748B" borderRadius="0.25rem" w="5.625rem" h="1.375rem">
            <Text
              fontSize="0.75rem"
              fontWeight="400"
              lineHeight="1rem"
              color="#F1F5F9"
              paddingLeft="0.75rem"
            >
              Expand
            </Text>
            <Image src={Expand}></Image>
          </HStack>
          <HStack bg="#64748B" borderRadius="0.25rem" w="5.625rem" h="1.375rem">
            <Text
              fontSize="0.75rem"
              fontWeight="400"
              lineHeight="1rem"
              color="#F1F5F9"
              paddingLeft="0.625rem"
            >
              Improve
            </Text>
            <Image src={Wand}></Image>
          </HStack>
          <HStack
            bg="#64748B"
            borderRadius="0.25rem"
            w="6.25rem"
            h="1.375rem"
            spacing="0.25rem"
          >
            <Text
              fontSize="0.75rem"
              fontWeight="400"
              lineHeight="1rem"
              color="#F1F5F9"
              paddingLeft="0.625rem"
            >
              Paraphrase
            </Text>
            <Image src={Paraphrase}></Image>
          </HStack>
          <HStack
            bg="#64748B"
            borderRadius="0.25rem"
            w="5.625rem"
            h="1.375rem"
            spacing="0.25rem"
          >
            <Text
              fontSize="0.75rem"
              fontWeight="400"
              lineHeight="1rem"
              color="#F1F5F9"
              paddingLeft="0.875rem"
            >
              Simplify
            </Text>
            <Image src={Simplify}></Image>
          </HStack>
          <HStack
            bg="#64748B"
            borderRadius="0.25rem"
            w="4.875rem"
            h="1.375rem"
            spacing="0.0625rem"
          >
            <Text
              fontSize="0.75rem"
              fontWeight="400"
              lineHeight="1rem"
              color="#F1F5F9"
              paddingLeft="0.875rem"
            >
              Explain
            </Text>
            <Image src={Explain}></Image>
          </HStack>
          <HStack
            bg="#64748B"
            borderRadius="0.25rem"
            w="5.625rem"
            h="1.375rem"
            spacing="0.125rem"
          >
            <Text
              fontSize="0.75rem"
              fontWeight="400"
              lineHeight="1rem"
              color="#F1F5F9"
              paddingLeft="0.75rem"
            >
              Translate
            </Text>
            <Image src={Translate}></Image>
          </HStack>
        </HStack>
      </Center>
      <Center>
        <Box
          w="52.625rem"
          h="12.5rem"
          borderRadius="0.625rem"
          borderColor="#334155"
          borderWidth="0.125rem"
          bg="#0F172A"
          marginTop="3.125rem"
        >
          <VStack>
            <HStack spacing="36.25rem" marginTop="0.4375rem">
              <Text
                color="#F8FAFC"
                fontSize="1.125rem"
                lineHeight="1.75rem"
                fontWeight="600"
                textAlign="left"
              >
                Merlin Says:
              </Text>
              <HStack>
                <Box
                  w="3.375rem"
                  h="1.625rem"
                  bg="#334155"
                  borderRadius="0.5rem"
                  padding="0.25rem"
                >
                  <HStack>
                    <button>
                      <Image src={LeftArrow}></Image>
                    </button>
                    <button>
                      <Image src={RightArrow}></Image>
                    </button>
                  </HStack>
                </Box>
                <Box
                  w="1.625rem"
                  h="1.625rem"
                  bg="#334155"
                  borderRadius="0.5rem"
                  padding="0.25rem"
                >
                  <button onClick={handleClick}>
                    <Image src={Refresh}></Image>
                  </button>
                </Box>
                <Box
                  w="1.625rem"
                  h="1.625rem"
                  bg="#334155"
                  borderRadius="0.5rem"
                  padding="0.25rem"
                >
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(textRef.current.innerText)
                    }}
                  >
                    <Image src={Copy}></Image>
                  </button>
                </Box>
              </HStack>
            </HStack>
            <Divider orientation="horizontal" />
            <HStack spacing="0.3125rem" padding="0.625rem" textAlign="left">
              <Text
                color="#FAFAF9"
                fontSize="0.875rem"
                fontWeight="400"
                lineHeight="1.25rem"
                paddingRight="0.3125rem"
                ref={textRef}
              ></Text>
            </HStack>
          </VStack>
        </Box>
      </Center>
      <Center>
        <HStack marginTop="1.25rem" spacing="0.875rem">
          <Box
            borderRadius="0.5rem"
            borderColor="#921DFB"
            bg="#0F172A"
            borderWidth="0.125rem"
            w="10.5rem"
            h="3.25rem"
            padding="0.625rem"
          >
            <HStack>
              <Image src={Chrome}></Image>
              <Text color="#EDE9FE">Add to Chrome</Text>
            </HStack>
          </Box>
          <Box
            borderRadius="0.5rem"
            borderColor="#921DFB"
            bg="#0F172A"
            borderWidth="0.125rem"
            w="10.5rem"
            h="3.25rem"
            padding="0.625rem"
          >
            <HStack>
              <Image src={Firefox}></Image>
              <Text color="#EDE9FE">Add to Chrome</Text>
            </HStack>
          </Box>
        </HStack>
      </Center>
    </div>
  );
}

export default App;
