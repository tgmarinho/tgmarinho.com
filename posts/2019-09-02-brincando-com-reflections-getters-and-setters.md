---
title: Brincando com Reflections Getters and Setters
description: Brincando com Reflections Getters and Setters do Java
date: '2019-09-02 04:25:06'
thumbnail: /assets/img/cienciada.jpg
category: dev
background: '#637a91'
---
Brincando aqui com Reflections, tentando setar um valor de uma variável qualquer e pegando os valores dela.

Nessa minha brincadeira aqui eu tenho uma classe de Domínio `InsumoMaterial.java`, ela contém valores de preços de material de construção do Brasil, todo, e eu quero pegar um valor para um determinado estado, então fiz um Reflections pra pegar o getValorXX, onde XX é a sigla do estado.

Dessa forma consigo setar e pegar os valores = )

```
import java.math.BigDecimal;

public class InsumoMaterial {

    private Long id;
    private String nome;
    private BigDecimal valorMS;
    private BigDecimal valorSP;
    private BigDecimal valorMG;
    private BigDecimal valorMT;
    public Long getId() {
    return id;
    }

    public void setId(Long id) {
       this.id = id;
    }

    public String getNome() {
       return nome;
    }

    public void setNome(String nome) {
      this.nome = nome;
    }

    public BigDecimal getValorMS() {
      return valorMS;
    }

    public void setValorMS(BigDecimal valorMS) {
      this.valorMS = valorMS;
    }

    public BigDecimal getValorSP() {
      return valorSP;
    }

    public void setValorSP(BigDecimal valorSP) {
      this.valorSP = valorSP;
    }

    public BigDecimal getValorMG() {

    return valorMG;

    }

    public void setValorMG(BigDecimal valorMG) {
      this.valorMG = valorMG;
    }

    public BigDecimal getValorMT() {
       return valorMT;
    }

    public void setValorMT(BigDecimal valorMT) {
      this.valorMT = valorMT;
    }

}
```

Classe Main.java para executar e testar.

```
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.math.BigDecimal;
public class Main {

    public static void main(String\[] args) {

    String sigla = “MS”;
    InsumoMaterial.class.getName();
    InsumoMaterial im = new InsumoMaterial();

    im.setValorMS(BigDecimal.ONE);

    try {

    // seta valor no método

    im.getClass().getDeclaredMethod(“setValor” + sigla, BigDecimal.class).invoke(im, new BigDecimal(“187.98”));

    System.out.println(im.getValorMS());

    // pega o valor

    BigDecimal valorSinapi = (BigDecimal) im.getClass().getDeclaredMethod(“getValor” + sigla).invoke(im);

    System.out.println(im.getValorMS());

    } catch (NoSuchMethodException | SecurityException | IllegalAccessException | IllegalArgumentException | InvocationTargetException e1) {

    // TODO Auto-generated catch block

    e1.printStackTrace();

    }

    }

}
```
