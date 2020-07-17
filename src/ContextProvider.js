import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

const AppContext = React.createContext();

class ContextProvider extends Component {

    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        openModel: false,
        modelProduct: detailProduct,
        subTotal: 0,
        cartTax: 0,
        total: 0
    }
    componentDidMount() {
        this.setProducts();
    }


    setProducts = () => {
        let TempProduct = [];

        storeProducts.forEach(item => {
            const singleItem = { ...item };
            TempProduct = [...TempProduct, singleItem];
        });

        this.setState(() => {
            return { products: TempProduct }
        })

    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        })
    };

    addToCart = (Id) => {
        const tempProduct = [...this.state.products];
        const ProductIndex = this.state.products.indexOf(this.getItem(Id));
        const CartProduct = tempProduct[ProductIndex];

        console.log(CartProduct);

        CartProduct.inCart = true;
        CartProduct.count = 1;
        const price = CartProduct.price;
        CartProduct.total = price;

        this.setState(() => {
            return {
                product: tempProduct,
                cart: [...this.state.cart, CartProduct]
            }
        },
            () => {
                this.addTotal();

            });
    };

    addtoModel = (id) => {
        let prod = this.getItem(id);
        this.setState(() => {
            return { modelProduct: prod, openModel: true }
        });
    }

    CloseModel = () => {
        this.setState(() => {
            return {
                openModel: false
            }
        });
    }

    increment = (id) => {

        let cartTemp = [...this.state.cart];
        let item = this.state.cart.find(a => a.id === id);
        let product = this.getItem(id);
        item.count += 1;
        const unitPrice = product.price;
        item.total = unitPrice * item.count;

        this.setState(() => {
            return {
                cart: cartTemp
            }
        },
            () => {
                this.addTotal();
            }
        );

    }


    decrement = (id) => {

        let cartTemp = [...this.state.cart];
        const cartProduct = this.state.cart.find(a => a.id === id);

        const product = this.getItem(id);

        if (cartProduct.count > 1) {

            cartProduct.count -= 1;
            cartProduct.total = product.price * cartProduct.count;

            this.setState(() => {
                return {
                    cart: cartTemp
                }
            },
                () => {
                    this.addTotal();
                }
            );

        }
        else {
            this.removeItem(id);
        }

    }

    removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        var removeProduct = this.getItem(id);
        var index = tempProducts.indexOf(removeProduct);
        let product = tempProducts[index];


        product.count = 0;
        product.total = 0;
        product.inCart = false;
        tempCart = tempCart.filter((item) => item.id !== id);


        this.setState(() => {
            return {
                cart: tempCart,
                products: tempProducts
            }
        },
            () => {
                this.addTotal();
            }
        )
    }

    clearCart = () => {
        this.setState(() => {
            return {
                cart: []
            }
        },
            () => {
                this.setProducts();
            });

    }


    addTotal = () => {
        let fsubTotal = 0;
        this.state.cart.map((item) => (fsubTotal = fsubTotal + item.total));
        let _tempTax = fsubTotal * 0.1;
        const fTax = parseFloat(_tempTax.toFixed(2));
        let ftotal = fTax + fsubTotal;

        this.setState(() => {
            return {
                cartTax: fTax,
                total: ftotal,
                subTotal: fsubTotal
            }
        });
    }

    render() {
        return (

            <AppContext.Provider
                value={{
                    ...this.state,
                    addToCart: this.addToCart,
                    handleDetail: this.handleDetail,
                    CloseModel: this.CloseModel,
                    addtoModel: this.addtoModel,
                    clearCart: this.clearCart,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart

                }}
            >
                {this.props.children}
            </AppContext.Provider>

        )
    }
}

const ContextConsumer = AppContext.Consumer;

export { ContextProvider, ContextConsumer }
