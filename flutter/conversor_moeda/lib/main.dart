import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

const request = "https://api.hgbrasil.com/finance?format=json&key=e77b4491";

void main() async {
  runApp(MaterialApp(
    title: 'Conversor de Moeda',
    home: Home(),
    theme: ThemeData(
      hintColor: Colors.amber,
      primaryColor: Colors.white,
    ),
  ));
}

Future<Map> getData() async {
  http.Response response = await http.get(request);
  return json.decode(response.body);
}

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final realController = new TextEditingController();
  final dolarController = new TextEditingController();
  final euroController = new TextEditingController();

  double dolar = 0;
  double euro = 0;

  void _realChanged(String text) {
    if (text.isEmpty) {
      clearAll();
      return;
    }

    double real = double.parse(text);
    dolarController.text = (real * dolar).toStringAsFixed(2);
    euroController.text = (real * euro).toStringAsFixed(2);
  }

  void _dolarChanged(String text) {
    if (text.isEmpty) {
      clearAll();
      return;
    }

    double dolar = double.parse(text);
    realController.text = (dolar * this.dolar).toStringAsFixed(2);
    euroController.text = (dolar * (this.dolar / euro)).toStringAsFixed(2);
  }

  void _euroChanged(String text) {
    if (text.isEmpty) {
      clearAll();
      return;
    }

    double euro = double.parse(text);
    realController.text = (euro * this.euro).toStringAsFixed(2);
    dolarController.text = (euro * (this.euro / dolar)).toStringAsFixed(2);
  }

  void clearAll() {
    realController.text = "";
    dolarController.text = "";
    euroController.text = "";
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.black,
        appBar: AppBar(
          title: Text("\$ Conversor \$"),
          backgroundColor: Colors.amber,
          centerTitle: true,
        ), // AppBar,
        body: FutureBuilder<Map>(
            future: getData(),
            builder: (context, snapshot) {
              switch (snapshot.connectionState) {
                case ConnectionState.none:
                case ConnectionState.waiting:
                  return Center(
                    child: Text(
                      "Carregando dados...",
                      style: TextStyle(
                        color: Colors.amber,
                        fontSize: 25.0,
                      ), //TextStyle
                      textAlign: TextAlign.center,
                    ), //Text,
                  ); //Center
                default:
                  if (snapshot.hasError) {
                    return Center(
                      child: Text(
                        "Erro ao carregar dados...",
                        style: TextStyle(
                          color: Colors.amber,
                          fontSize: 25.0,
                        ), //TextStyle
                        textAlign: TextAlign.center,
                      ), //Text,
                    ); //Center
                  } else {
                    dolar =
                        snapshot.data["results"]["currencies"]["USD"]["buy"];
                    euro = snapshot.data["results"]["currencies"]["EUR"]["buy"];
                    return SingleChildScrollView(
                      padding: EdgeInsets.all(10.0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: <Widget>[
                          Icon(
                            Icons.monetization_on,
                            size: 150.0,
                            color: Colors.amber,
                          ),
                          buildTextField(
                              "Reais", "R\$", realController, _realChanged),
                          Divider(),
                          buildTextField(
                              "Dolar", "U\$\$", dolarController, _dolarChanged),
                          Divider(),
                          buildTextField(
                              "Euro", "€", euroController, _euroChanged),
                        ],
                      ), //Column,
                    ); //SingleChildScrollView;
                  }
              }
            }) //FutureBuilder,
        ); //Scaffold;
  }
}

Widget buildTextField(String label, String prefix,
    TextEditingController editingController, Function f) {
  return TextField(
    keyboardType: TextInputType.numberWithOptions(decimal: true),
    // Permite decimal no IOS
    controller: editingController,
    onChanged: f,
    decoration: InputDecoration(
      labelText: label,
      labelStyle: TextStyle(color: Colors.amber),
      border: OutlineInputBorder(),
      prefixText: prefix,
    ),
    style: TextStyle(
      color: Colors.amber,
      fontSize: 25.0,
    ),
  );
}
