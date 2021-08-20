// constants for actions
import {dataActions} from "store/actions/dataActions";
import {dataReducer} from "store/reducers/dataReducer";

it("Length of cards array should be incremented", () => {
    // 1. Test data
    const action = dataActions.setDataAction(
        [
            {
                id: 1,
                type: 1,
                imgSrc: "card-img1.jpg",
                imgWidth: 309,
                imgHeight: 320,
                cardTitle: "Nippon flex",
                priceCrypto: 8.25,
                priceCryptoCurrancy: "ETH",
                previewSrc: "preview1.png",
                category: "itsnara",
                price: 7365,
                priceCurrancy: "AED"
            },
            {
                id: 2,
                type: 2,
                imgSrc: "card-img2.jpg",
                imgWidth: 309,
                imgHeight: 320,
                cardTitle: "Chaos on delivery",
                priceCrypto: 5.5,
                priceCryptoCurrancy: "ETH",
                previewSrc: "preview2.png",
                category: "supercar",
                price: 7365,
                priceCurrancy: "AED"
            },
            {
                id: 3,
                type: 1,
                imgSrc: "card-img3.jpg",
                imgWidth: 309,
                imgHeight: 320,
                cardTitle: "Money washing",
                priceCrypto: 1.25,
                priceCryptoCurrancy: "ETH",
                previewSrc: "preview3.png",
                category: "beatbang",
                price: 7365,
                priceCurrancy: "AED"
            },
            {
                id: 4,
                type: 3,
                imgSrc: "card-img4.jpg",
                imgWidth: 309,
                imgHeight: 320,
                cardTitle: "Robotic nap",
                priceCrypto: 4.45,
                priceCryptoCurrancy: "ETH",
                previewSrc: "preview4.png",
                category: "neofab",
                price: 7365,
                priceCurrancy: "AED"
            },
            {
                id: 5,
                type: 1,
                imgSrc: "card-img5.jpg",
                imgWidth: 309,
                imgHeight: 320,
                cardTitle: "Og wagon",
                priceCrypto: 8.25,
                priceCryptoCurrancy: "ETH",
                previewSrc: "preview1.png",
                category: "itsnara",
                price: 7365,
                priceCurrancy: "AED"
            },
            {
                id: 6,
                type: 1,
                imgSrc: "card-img6.jpg",
                imgWidth: 309,
                imgHeight: 320,
                cardTitle: "The pink sea",
                priceCrypto: 5.5,
                priceCryptoCurrancy: "ETH",
                previewSrc: "preview2.png",
                category: "supercar",
                price: 7365,
                priceCurrancy: "AED"
            },
            {
                id: 7,
                type: 1,
                imgSrc: "card-img7.jpg",
                imgWidth: 309,
                imgHeight: 320,
                cardTitle: "Lost in sight",
                priceCrypto: 1.25,
                priceCryptoCurrancy: "ETH",
                previewSrc: "preview3.png",
                category: "beatbang",
                price: 7365,
                priceCurrancy: "AED"
            },
            {
                id: 8,
                type: 3,
                imgSrc: "card-img8.jpg",
                imgWidth: 309,
                imgHeight: 320,
                cardTitle: "Autowild",
                priceCrypto: 4.45,
                priceCryptoCurrancy: "ETH",
                previewSrc: "preview4.png",
                category: "neofab",
                price: 7365,
                priceCurrancy: "AED"
            },
            {
                id: 9,
                type: 2,
                imgSrc: "card-img9.jpg",
                imgWidth: 309,
                imgHeight: 320,
                cardTitle: "Og wagon",
                priceCrypto: 8.25,
                priceCryptoCurrancy: "ETH",
                previewSrc: "preview1.png",
                category: "itsnara",
                price: 7365,
                priceCurrancy: "AED"
            },
            {
                id: 10,
                type: 2,
                imgSrc: "card-img10.jpg",
                imgWidth: 309,
                imgHeight: 320,
                cardTitle: "The pink sea",
                priceCrypto: 5.5,
                priceCryptoCurrancy: "ETH",
                previewSrc: "preview2.png",
                category: "supercar",
                price: 7365,
                priceCurrancy: "AED"
            },
            {
                id: 11,
                type: 2,
                imgSrc: "card-img7.jpg",
                imgWidth: 309,
                imgHeight: 320,
                cardTitle: "Lost in sight",
                priceCrypto: 1.25,
                priceCryptoCurrancy: "ETH",
                previewSrc: "preview3.png",
                category: "beatbang",
                price: 7365,
                priceCurrancy: "AED"
            },
            {
                id: 12,
                type: 1,
                imgSrc: "card-img12.jpg",
                imgWidth: 309,
                imgHeight: 320,
                cardTitle: "Autowild",
                priceCrypto: 4.45,
                priceCryptoCurrancy: "ETH",
                previewSrc: "preview4.png",
                category: "neofab",
                price: 7365,
                priceCurrancy: "AED"
            }
        ]
    );
    const state = {
        cards: [],
        isLoading: false
    };
    // 2. Action
    const newState = dataReducer( state, action );
    // 3. Expectation
    expect(newState.cards.length).toBe(12);
    expect(newState.cards[4].cardTitle).toBe("Og wagon");
});