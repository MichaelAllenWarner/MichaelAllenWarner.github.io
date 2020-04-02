---
layout: post
title:  "Covariant Electrodynamics the Easy Way, Part II: “Electrodyadics” (Tensors Lite)"
date:   2020-03-31 08:00:00 -0400
categories: physics
excerpt: >
  In <a href="/physics/2019/07/16/vector-triple-products-in-minkowski-spacetime.html">Part I</a>, I introduced covariant electrodynamics by extending the vector triple product to Minkowski spacetime. In this second part, I cover the same material in a slightly more sophisticated but still-approachable way, by extending <em>dyadics</em> to Minkowski spacetime. No index gymnastics, and no prior knowledge of tensors or dyadics needed.
usemathjax: true
---

## Review

This post builds on material in [Part I](/physics/2019/07/16/vector-triple-products-in-minkowski-spacetime.html), whose key results (in Heaviside&ndash;Lorentz units) were the electromagnetic field equation:

$$
\begin{aligned}
\mathbf J &= - \partialup \; \text{“} \mkern-5mu \times (\partialup \times \mkern-5mu \text{”} \, \mathbf A) \\[2pt]
&= \Box \mathbf A - \partialup (\partialup \cdot \mathbf A)
\end{aligned}
$$

and the Lorentz four-force

$$
\begin{aligned}
\mathbf F &= \frac{q}{c} \Big[ \mathbf V \; \text{“} \mkern-5mu \times (\partialup \times \mkern-5mu \text{”} \, \mathbf A) \Big] \\[5pt]
&= \frac{q}{c} \Big[ \partialup _{\mathbf A} \left( \mathbf V \cdot \mathbf A  \right) - \left( \mathbf V \cdot \partialup \right) \mathbf A \Big] ,
\end{aligned}
$$

where:

* $$ \mathbf J = ( \rho, \, \mathbf j / c ) $$ is the four-current density* (the source field),
* $$ \mathbf A = (A^t, \, \mathbf a) $$ is the electromagnetic four-potential,
* $$ \mathbf F $$ is the Lorentz four-force that the field exerts on a particle,
* $$ \mathbf V $$ is that particle’s four-velocity,
* $$ q $$ is the particle’s charge,
* $$ \partialup = (\partial^t, \, - \del) $$ is the four-del vector operator (with $$ \partial^t = \frac{1}{c} \frac{\partial}{\partial t} $$),
* $$ \Box = \partialup \cdot \partialup$$ is the d’Alembertian scalar operator (aka the four-Laplacian or the wave operator),
* and $$ c $$ is of course the speed of light.

\*(our definition of $$ \mathbf J $$ would be $$ \mathbf J / c $$ in most treatments)

As a reminder, we’re using the “West coast” $$ (+, -, -, -) $$ sign convention, such that the Minkowski dot product of the four-vectors $$ \mathbf Q = (Q^t, Q^x, Q^y, Q^z) = (Q^t, \mathbf q) $$ and $$ \mathbf W = (W^t, \mathbf w) $$ is:

$$
\mathbf Q \cdot \mathbf W = Q^t W^t - (\mathbf q \cdot \mathbf w) ,
$$

where $$ \mathbf q \cdot \mathbf w = q_x w_x + q_y w_y + q_z w_z = Q^x W^x + Q^y W^y + Q^z W^z$$ is the Euclidean dot product (we use superscript indices for four-vector components and subscript indices for three-vector components).

## Minkowski Dyadics

### Factoring Out the “A” of a “BAC - CAB”

Both of our key equations from Part I are “Minkowski vector triple products,” and the scare quotes remind us that the $$ \times $$ notation is merely suggestive (the cross product isn’t defined in four dimensions). But the four-vector “BAC - CAB” expressions are literal, and if you stare long enough at $$ \mathbf B (\mathbf A \cdot \mathbf C) - \mathbf C (\mathbf A \cdot \mathbf B) $$, you might start to wonder whether it’s possible to somehow “factor out” the vector that’s common to both dot products, which is $$ \mathbf A $$ (a generic four-vector here, not the four-potential).

You’re not sure how to “combine” $$ \mathbf B $$ and $$ \mathbf C $$ to make it happen, but you can tell that the combination can’t be commutative (otherwise the “BAC - CAB” would yield zero!). So you rearrange the thing in preparation for the big move: $$ \mathbf B (\mathbf C \cdot \mathbf A) - \mathbf C (\mathbf B \cdot \mathbf A) $$. Now $$ \mathbf B $$ and $$ \mathbf C $$ are adjacent in both terms, and $$\mathbf A $$ is in position on the right. Proceed:

$$ \mathbf B (\mathbf C \cdot \mathbf A) - \mathbf C (\mathbf B \cdot \mathbf A) = (\mathbf B \mathbf C - \mathbf C \mathbf B) \cdot \mathbf A , $$

or if you prefer using a symbol like I do:

$$ \mathbf B (\mathbf C \cdot \mathbf A) - \mathbf C (\mathbf B \cdot \mathbf A) = (\mathbf B \otimes \mathbf C - \mathbf C \otimes \mathbf B) \cdot \mathbf A . $$

The question is: does this mean anything? Sure it does! We can *define* $$ \mathbf B \otimes \mathbf C $$ as the object that satisfies $$ ( \mathbf B \otimes \mathbf C ) \cdot \mathbf A = \mathbf B (\mathbf C \cdot \mathbf A ) $$ and also $$ \mathbf A \cdot ( \mathbf B \otimes \mathbf C ) = ( \mathbf A \cdot \mathbf B ) \mathbf C $$. Later we can work out what this all must look like in terms of components&mdash;it’s important but it takes a back seat to understanding the geometric objects themselves.

### Terminology and Antisymmetry

We call the operation $$ \mathbf B \otimes \mathbf C $$ the [**dyadic product**](https://en.wikipedia.org/wiki/Dyadic_product) (a special case of the [**tensor product**](https://en.wikipedia.org/wiki/Tensor_product), which we won’t cover in generality), and we call the resulting object a **dyad**. Dyads and *sums of dyads* are collectively **dyadics**, so $$ ( \mathbf B \otimes \mathbf C - \mathbf C \otimes \mathbf B ) $$ is a four-dyadic but not a four-dyad.

A dyad’s **transpose** is the dyadic product in reverse order: $$ ( \mathbf B \otimes \mathbf C ) ^\textrm{T} = \mathbf C \otimes \mathbf B $$. A *dyadic’s* transpose is the sum of the transposes of the dyads that total the dyadic: $$ ( \mathbf B \otimes \mathbf C - \mathbf C \otimes \mathbf B ) ^\textrm{T} = \mathbf C \otimes \mathbf B - \mathbf B \otimes \mathbf C $$. Note that this last example is a dyadic whose transpose is also its additive inverse. Such a dyadic is **antisymmetric**, and we use the following shorthand for forming an antisymmetric dyadic from a pair of vectors:

$$ \mathbf B \wedge \mathbf C \, \equiv \, \mathbf B \otimes \mathbf C - \mathbf C \otimes \mathbf B $$

(the **wedge product**). Looking back to our “BAC - CAB” expression, we see now that an identity relates vector triple products to wedge products:

$$
\begin{aligned}
\mathbf A \; \text{“} \mkern-5mu \times ( \mathbf B \times \mkern-5mu \text{”} \, \mathbf C ) &= \mathbf B ( \mathbf C \cdot \mathbf A ) - \mathbf C ( \mathbf B \cdot \mathbf A ) \\[2pt]
&= ( \mathbf B \otimes \mathbf C - \mathbf C \otimes \mathbf B ) \cdot \mathbf A \\[2pt]
\mathbf A \; \text{“} \mkern-5mu \times ( \mathbf B \times \mkern-5mu \text{”} \, \mathbf C ) &= ( \mathbf B \wedge \mathbf C ) \cdot \mathbf A .
\end{aligned}
$$

(An analogous identity holds for three-vectors, where the vector triple product is “literal”: $$ \mathbf a \times ( \mathbf b \times \mathbf c ) = ( \mathbf b \wedge \mathbf c ) \cdot \mathbf a $$.)

## Electrodyadics

Let’s apply our new identity to our key results from Part I.

### The Electromagnetic Field Equation

First, we have:

$$
\mathbf J = - \partialup \; \text{“} \mkern-5mu \times (\partialup \times \mkern-5mu \text{”} \, \mathbf A) = - ( \partialup \wedge \mathbf A ) \cdot \partialup_{\mathbf A} = \partialup \cdot ( \partialup \wedge \mathbf A ) ,
$$

where the last step follows from the antisymmetry of the wedge product. We define the antisymmetric **Faraday dyadic** (usually called the [Faraday tensor](https://en.wikipedia.org/wiki/Electromagnetic_tensor)) as $$ \mathbb{F} \equiv \partialup \wedge \mathbf A $$. Then:

$$
\mathbf J = \partialup \cdot \mathbb{F} ,
$$

and the four-current is the four-divergence of the Faraday dyadic.

### The Lorentz Four-Force

Now the Lorentz four-force:

$$
\mathbf F = \frac{q}{c} \Big[ \mathbf V \; \text{“} \mkern-5mu \times (\partialup \times \mkern-5mu \text{”} \, \mathbf A) \Big] = \frac{q}{c} \Big[ ( \partialup \wedge \mathbf A ) \cdot \mathbf V \Big] .
$$

With $$ \mathbb{F} $$:

$$
\mathbf F = \frac{q}{c} \, \mathbb{F} \cdot \mathbf V .
$$

## Dyadic Components

Lovely! Is that it? Well, more or less, yes, but let’s discuss dyadic components now and see where that leads us. One big caveat: we’re only considering components in standard rectangular $$ (ct, x, y, z) $$ coordinates. A fuller treatment would involve basis vectors explicitly.

### Minkowski Dot Product in Matrix Notation

To understand what a dyadic looks like in terms of components, it’s helpful to put the Minkowski dot product into matrix notation. Convince yourself that it’s this 1-by-1:

$$
[ \mathbf A \cdot \mathbf B ]
=
\begin{bmatrix}
A^t & A^x & A^y & A^z
\end{bmatrix}
\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & -1 & 0 & 0 \\
0 & 0 & -1 & 0 \\
0 & 0 & 0 & -1
\end{bmatrix}
\begin{bmatrix}
B^t \\
B^x \\
B^y \\
B^z
\end{bmatrix} .
$$

If we define $$ \eta \equiv \mathrm{diag}(1, -1, -1, -1) $$ (that 4-by-4 in the middle), and if we use the convention that square-brackets around a vector signify a column-matrix, then we can write that more succinctly:

$$
[ \mathbf A \cdot \mathbf B ] = [ \mathbf A ]^{\mathrm{T}} \eta [ \mathbf B ].
$$

### Dyadic Product in Matrix Notation

Now that we have the Minkowski dot product (between vectors) in matrix notation, we can write $$ \mathbf A \cdot ( \mathbf B \otimes \mathbf C ) = ( \mathbf A \cdot \mathbf B ) \mathbf C $$ in matrix notation:

$$
[ \mathbf A \cdot (\mathbf B \otimes  \mathbf C )]^\mathrm{T}
=
[( \mathbf A \cdot \mathbf B ) \mathbf C]^\mathrm{T}
=
[ \mathbf A ]^{\mathrm{T}} \eta [ \mathbf B ][ \mathbf C ]^{\mathrm{T}} ,
$$

and it’s clear that the matrix-representation of the dyadic product is the [outer product](https://en.wikipedia.org/wiki/Outer_product):

$$
[ \mathbf B \otimes  \mathbf C ]
=
[ \mathbf B ] [ \mathbf C ]^{\mathrm{T}}
=
\begin{bmatrix}
B^t \\
B^x \\
B^y \\
B^z
\end{bmatrix}
\begin{bmatrix}
C^t & C^x & C^y & C^z
\end{bmatrix}
=
\begin{bmatrix}
B^t C^t & B^t C^x & B^t C^y & B^t C^z \\
B^x C^t & B^x C^x & B^x C^y & B^x C^z \\
B^y C^t & B^y C^x & B^y C^y & B^y C^z \\
B^z C^t & B^z C^x & B^z C^y & B^z C^z
\end{bmatrix} .
$$

### Components of the Faraday Dyadic

Next, the Faraday dyadic:

$$
[ \mathbb{F} ] = [ \partialup \otimes \mathbf A ] - [ \partialup \otimes \mathbf A ]^\mathrm{T}
=
\begin{bmatrix}
\partial^t \\
\partial^x \\
\partial^y \\
\partial^z
\end{bmatrix}
\begin{bmatrix}
A^t & A^x & A^y & A^z
\end{bmatrix}
-
\begin{bmatrix}
A^t \\
A^x \\
A^y \\
A^z
\end{bmatrix}
\begin{bmatrix}
\partial^t & \partial^x & \partial^y & \partial^z
\end{bmatrix}_{\mathbf A} ,
$$

where we must remember that $$ \partialup = ( \partial^t, \, \partial^x, \, \partial^y, \, \partial^z ) = ( \frac{1}{c} \frac{\partial}{\partial t}, \, - \del ) $$ (i.e., the spatial components are *negative* partials). That comes to:

$$
[ \mathbb{F} ]
=
\begin{bmatrix}
0 & \partial^t A^x - \partial^x A^t & \partial^t A^y - \partial^y A^t & \partial^t A^z - \partial^z A^t \\
\partial^x A^t - \partial^t A^x & 0 & \partial^x A^y - \partial^y A^x & \partial^x A^z - \partial^z A^z \\
\partial^y A^t - \partial^t A^y & \partial^y A^x - \partial^x A^y & 0 & \partial^y A^z - \partial^z A^y \\
\partial^z A^t - \partial^t A^z & \partial^z A^x - \partial^x A^z & \partial^z A^y - \partial^y A_z & 0
\end{bmatrix} .
$$

In Part I, [we defined](/physics/2019/07/16/vector-triple-products-in-minkowski-spacetime.html#lorentz-three-force-and-maxwells-equations) the electric field as $$ \mathbf e = - \partial^t \mathbf a - \del A^t $$ and the magnetic field as $$ \mathbf  b = \del \times \mathbf a $$. It follows that:

$$
[ \mathbb{F} ]
=
\begin{bmatrix}
0 & -e_x & -e_y & -e_z \\
e_x & 0 & -b_z & b_y \\
e_y & b_z & 0 & -b_x \\
e_z & -b_y & b_x & 0
\end{bmatrix} .
$$

### Components of the Field Equation: Something Missing

In matrix notation, the field equation reads:

$$
[ \mathbf J ]^\mathrm{T} = [ \partialup ]^\mathrm{T} \eta [ \mathbb{F} ]
=
\begin{bmatrix}
\partial^t & \partial^x & \partial^y & \partial^z
\end{bmatrix}
\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & -1 & 0 & 0 \\
0 & 0 & -1 & 0 \\
0 & 0 & 0 & -1
\end{bmatrix}
\begin{bmatrix}
0 & -e_x & -e_y & -e_z \\
e_x & 0 & -b_z & b_y \\
e_y & b_z & 0 & -b_x \\
e_z & -b_y & b_x & 0
\end{bmatrix} ,
$$

where it’s understood that $$ \partialup $$ operates on $$ \mathbb{F} $$ (not on $$ \eta $$). Carrying out the multiplication gives the row-matrix representation of the four-vector $$ ( \rho, \, \mathbf j / c ) = ( \del \cdot \mathbf e, \, - \partial^t \mathbf e + \del \times \mathbf b ) $$, which constitutes the inhomogenous pair of Maxwell’s equations (see the [last section](/physics/2019/07/16/vector-triple-products-in-minkowski-spacetime.html#lorentz-three-force-and-maxwells-equations) of Part I). But what about the other two? How do we get the homogeneous $$ \del \cdot \mathbf b = 0 $$ and $$ \partial^t \mathbf b + \del \times \mathbf e = \mathbf 0 $$ from a dyadic equation?

## The Homogeneous Maxwell Equations

Since the left sides of the homogeneous Maxwell equations have the same form as those of the inhomogeneous pair, and since the right sides together constitute a four-vector (the *zero* four-vector), it must be possible to express $$ (0, \, \mathbf 0) = ( \del \cdot \mathbf b, \, \partial^t \mathbf b + \del \times \mathbf e ) $$ as the four-divergence of some four-dyadic $$ \mathbb{G} $$ whose components are those of $$ \mathbb{F} $$ rearranged, with $$ \mathbf e $$ and $$ \mathbf b $$ swapped and with the appropriate signs flipped. But which signs?

### The Maxwell Dyadic

The answer (or *an* answer) reveals itself if we multiply both sides of $$ \partial^t \mathbf b + \del \times \mathbf e = \mathbf 0 $$ by $$ -1 $$, which yields $$ - \partial^t \mathbf b - \del \times \mathbf e = \mathbf 0 $$. Now we have $$ (0, \, \mathbf 0) = ( \del \cdot \mathbf b, \, - \partial^t \mathbf b - \del \times \mathbf e ) $$ to compare with $$ ( \rho, \, \mathbf j / c ) = ( \del \cdot \mathbf e, \, - \partial^t \mathbf e + \del \times \mathbf b ) $$, and we see that we should replace $$ \mathbf e $$ with $$ \mathbf b $$ and $$ \mathbf b$$ with $$ - \mathbf e $$. So:

$$
[ \mathbb{G} ]
=
\begin{bmatrix}
0 & -b_x & -b_y & -b_z \\
b_x & 0 & e_z & -e_y \\
b_y & -e_z & 0 & e_x \\
b_z & e_y & -e_x & 0
\end{bmatrix} ,
$$

and:

$$
\partialup \cdot \mathbb{G} = \boldsymbol{\emptyset} ,
$$

where $$ \boldsymbol \emptyset $$ is the zero four-vector.

We call $$ \mathbb{G} $$ the **Maxwell dyadic**. Note that because it’s antisymmetric, we would have obtained its additive inverse (*whose divergence also vanishes*) if we’d instead replaced $$ \mathbf b $$ with $$ \mathbf e $$ and $$ \mathbf e $$ with $$ - \mathbf b $$. The choice we made seems to be more common in the literature.

### Hodge Duality

The Maxwell dyadic’s component-rotating/sign-flipping relationship with the Faraday dyadic is called [**Hodge duality**](https://en.wikipedia.org/wiki/Hodge_star_operator), and we say that $$ \mathbb{G} $$ is the *Hodge dual* of $$ \mathbb{F} $$:

$$
\mathbb{G} \equiv \star \mathbb{F} .
$$

If we perform the *corresponding* component-rotating/sign-flipping procedure on $$ \mathbb{G} $$ (i.e., replace $$ \mathbf b $$ with $$ - \mathbf e $$ and $$ - \mathbf e $$ with $$ - \mathbf b $$, which actually amounts to the *same* procedure as before), we’ll end up with $$ - \mathbb{F} $$, so that $$ \star \mathbb{G} = \star \star \mathbb{F} = - \mathbb{F} = ( \partialup \wedge \mathbf A )^{\mathrm{T}} $$. Then the Hodge dual of *that* is $$ - \mathbb{G} $$, whose Hodge dual brings us back to $$ \mathbb{F} $$.

Just as the magnetic field is a [pseudovector](https://en.wikipedia.org/wiki/Pseudovector) that gains an extra sign-flip under “orientation-reversing” coordinate transformations (like reflection across an axis), the Maxwell dyadic is a *pseudodyadic* that does the same. More generally, both are examples of [pseudotensors](https://en.wikipedia.org/wiki/Pseudotensor).

We should note that Hodge duality isn’t specific to antisymmetric Minkowski dyadics. Other types of geometric objects have Hodge duals, too, and that includes vectors and scalars. But the mathematical toolkit we’re using isn’t equipped to handle the more advanced facets of this topic. For that, something like differential forms or index gymnastics is necessary.

### The Bianchi Identity

Having defined the Maxwell dyadic as the Hodge dual of the Faraday dyadic, we can appreciate that the divergencelessness of the former is an instance of a mathematical identity: the four-divergence of the Hodge dual of a four-vector field’s “differential wedge product” is zero. That’s a mouthful! It’s easier to see in an equation:

$$
\partialup \cdot \star ( \partialup \wedge \mathbf A ) = \boldsymbol \emptyset .
$$

You can verify this in the trenches by writing $$ \partialup \cdot \mathbb{G} $$ in matrix notation (explicitly in terms of $$ \mathbf A $$) and calculating any particular component. You’ll end up with six terms, each of which is a mixed-partial of a component of $$ \mathbf A $$, and each of which is canceled by its additive inverse. For example, the time component looks like this:

$$
( \partialup \cdot \mathbb{G} )^{t} = - \partial^x ( \partial^z A^y - \partial^y A^z ) - \partial^y ( \partial^x A^z - \partial^z A^x ) - \partial^z ( \partial^y A^x - \partial^x A^y ) ,
$$

which vanishes. The point is that we get $$ \partialup \cdot \mathbb G $$ “for free” by virtue of the Faraday dyadic’s having the form $$ \partialup \wedge \mathbf A $$.

This rule $$ \partialup \cdot \star ( \partialup \wedge \mathbf A ) = \boldsymbol \emptyset $$ is directly analogous to the divergencelessness of the curl in three-dimensional Euclidean space (indeed, $$ \del \cdot \mathbf b $$ is the time component of $$ \partialup \cdot \mathbb{G} $$, and $$ \mathbf b = \del \times \mathbf a $$). It’s also a manifestation of a broader principle called the (second) [**Bianchi identity**](https://en.wikipedia.org/wiki/Curvature_form#Bianchi_identities)&mdash;again, we’re reaching the limits of our mathematical toolkit, but the basic geometric idea here is that “the boundary of a boundary is zero” (as John Wheeler famously put it).

And that’s it for Part II! I’m planning another part (or two?) that will discuss how the components of a four-dyadic must transform under a Lorentz boost, introduce the Minkowski metric dyadic, and use dyadics to cover the electromagnetic stress&ndash;energy tensor and the electromagnetic Lagrangians (for both a particle and the field).

For more details, see my [little treatise](https://drive.google.com/open?id=0BzbijOFcLYkTSWJ5R0s5U1ZMYWM).
