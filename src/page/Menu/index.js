import React, { useState, useEffect } from "react";
import {
  IconButton,
  Box,
  Typography,
  Button,
  Card,
  AppBar,
  Badge,
} from "@mui/material";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import Toolbar from "./Toolbar";
import Category from "./Category";
import TitleCategory from "./TitleListeCategory";
import Product from "./Product";

const Menu = () => {
  const listCategory = [
    { id: 1, name: "Promoção", imgUrl: "http://" },
    { id: 2, name: "Hamburgers", imgUrl: "http://" },
    { id: 3, name: "Cachorro Quente", imgUrl: "http://" },
    { id: 4, name: "Combos", imgUrl: "http://" },
    { id: 5, name: "Refrigerantes", imgUrl: "http://" },
    { id: 6, name: "Cervejas", imgUrl: "http://" },
    { id: 7, name: "Porções", imgUrl: "http://" },
  ];

  const products = [
    {
      id: 1,
      name: "Produto 1",
      price: 10.0,
      pricePromo: 7,
      description:
        "Escolha 2 entre os sabores frango, frango empanado e steak churrasco, por um preço especial.",
      complement: [],
    },
    {
      id: 2,
      name: "Produto 2",
      price: 12.0,
      pricePromo: 7,
      description:
        "Escolha 2 entre os sabores frango, frango empanado e steak churrasco, por um preço especial.",
      complement: [],
    },
    {
      id: 3,
      name: "Produto 3",
      price: 7.0,
      pricePromo: 7,
      description:
        "Escolha 2 entre os sabores frango, frango empanado e steak churrasco, por um preço especial.",
      complement: [],
    },
  ];

  const [listItems, setListItems] = useState([]);
  const [sumTotalItems, setSumTotalItems] = useState(0);

  const onClickCategory = () => {};

  const onClickAddItem = (item) => {
    let items = listItems;
    items.push(item);

    setListItems(items.filter((item, index) => index > -1));
  };

  const sumItems = () => {
    let sum = 0;
    for (let i = 0; i < listItems.length; i++) {
      let item = listItems[i];

      sum += item.price;
    }
    //console.log(sum);
    setSumTotalItems(sum);
  };

  useEffect(() => {
    sumItems();
  }, [listItems]);

  return (
    <Box style={{ margin: -8 }}>
      <Toolbar
        address="Av. Brasil, 2541, Ivaiporã - PR"
        name="Nome da Empresa"
      />
      <Box
        display="flex"
        style={{ overflow: "hidden", overflowX: "scroll" }}
        mt={12}
        pb={2}
      >
        {listCategory.map((category) => (
          <Category
            id={category.id}
            name={category.name}
            onClick={onClickCategory}
          />
        ))}
      </Box>

      <Box>
        {listCategory.map((category) => (
          <Card sx={{ p: 2, mt: 2 }}>
            <TitleCategory title={category.name} />
            {products.map((prod) => (
              <Product
                onClick={() => onClickAddItem(prod)}
                description={prod.description}
                name={prod.name}
                price={prod.price}
              />
            ))}
          </Card>
        ))}
      </Box>
      <AppBar
        position="fixed"
        color="primary"
        style={{ top: "auto", bottom: 0 }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          pl={2}
          pr={2}
          style={{ height: 60, backgroundColor: "#2ecc71" }}
        >
          <Typography
            style={{ color: "white", fontWeight: "bold" }}
            variant="h6"
          >
            R${parseFloat(sumTotalItems).toFixed(2)}
          </Typography>

          <IconButton>
            <Badge badgeContent={listItems.length} color="secondary">
              <ShoppingCartIcon style={{ color: "white" }} />
            </Badge>
          </IconButton>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Menu;
