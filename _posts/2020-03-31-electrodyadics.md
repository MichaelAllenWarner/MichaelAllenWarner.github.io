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
\mathbf J &= - \vecpartial \; \text{“} \mkern-5mu \times (\vecpartial \times \mkern-5mu \text{”} \, \mathbf A) \\[2pt]
&= \Box \mathbf A - \vecpartial (\vecpartial \cdot \mathbf A)
\end{aligned}
$$

and the Lorentz four-force

$$
\begin{aligned}
\mathbf F &= \frac{q}{c} \Big[ \mathbf V \; \text{“} \mkern-5mu \times (\vecpartial \times \mkern-5mu \text{”} \, \mathbf A) \Big] \\[5pt]
&= \frac{q}{c} \Big[ \vecpartial _{\mathbf A} \left( \mathbf V \cdot \mathbf A  \right) - \left( \mathbf V \cdot \vecpartial \right) \mathbf A \Big] ,
\end{aligned}
$$

where:

* $$ \mathbf J = ( \rho, \, \mathbf j / c ) $$ is the four-current density\* (the source field),
* $$ \mathbf A = (A^t, \, \mathbf a) $$ is the electromagnetic four-potential,
* $$ \mathbf F $$ is the Lorentz four-force that the field exerts on a particle,
* $$ \mathbf V $$ is that particle’s four-velocity,
* $$ q $$ is the particle’s charge,
* $$ \vecpartial = (\partial^t, \, - \del) $$ is the four-del vector operator (with $$ \partial^t = \frac{1}{c} \frac{\partial}{\partial t} $$),
* $$ \Box = \vecpartial \cdot \vecpartial$$ is the d’Alembertian scalar operator (aka the four-Laplacian or the wave operator),
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

Maybe you’re not sure how to “combine” $$ \mathbf B $$ and $$ \mathbf C $$ to make it happen, but you can tell that the combination can’t be commutative (otherwise the “BAC - CAB” would yield zero!). So you rearrange the thing in preparation for the big move: $$ \mathbf B (\mathbf C \cdot \mathbf A) - \mathbf C (\mathbf B \cdot \mathbf A) $$. Now $$ \mathbf B $$ and $$ \mathbf C $$ are adjacent in both terms, and $$\mathbf A $$ is in position on the right. Proceed:

$$ \mathbf B (\mathbf C \cdot \mathbf A) - \mathbf C (\mathbf B \cdot \mathbf A) = (\mathbf B \mathbf C - \mathbf C \mathbf B) \cdot \mathbf A , $$

or if you prefer using a symbol like I do:

$$ \mathbf B (\mathbf C \cdot \mathbf A) - \mathbf C (\mathbf B \cdot \mathbf A) = (\mathbf B \otimes \mathbf C - \mathbf C \otimes \mathbf B) \cdot \mathbf A . $$

The question is: does this mean anything? Sure it does! We can *define* $$ \mathbf B \otimes \mathbf C $$ as the object that satisfies $$ ( \mathbf B \otimes \mathbf C ) \cdot \mathbf A = \mathbf B (\mathbf C \cdot \mathbf A ) $$ and also $$ \mathbf A \cdot ( \mathbf B \otimes \mathbf C ) = ( \mathbf A \cdot \mathbf B ) \mathbf C $$. Later we can work out what this all must look like in terms of components&mdash;that’s important but takes a back seat to understanding the geometric objects themselves.

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
\begin{aligned}
\mathbf J &= - \vecpartial \; \text{“} \mkern-5mu \times (\vecpartial \times \mkern-5mu \text{”} \, \mathbf A) \\[2pt]
&= - ( \vecpartial \wedge \mathbf A ) \cdot \vecpartial_{\mathbf A} \\[2pt]
&= \vecpartial \cdot ( \vecpartial \wedge \mathbf A ) ,
\end{aligned}
$$

where the last step follows from the antisymmetry of the wedge product, or explicitly:

$$
\begin{aligned}
- ( \vecpartial \wedge \mathbf A ) \cdot \vecpartial_{ \mathbf A } &= - \left[ ( \vecpartial \otimes \mathbf A ) \cdot \vecpartial_{ \mathbf A } - ( \mathbf A \otimes \vecpartial_{ \mathbf A } ) \cdot \vecpartial_{ \mathbf A } \right] \\[2pt]
&= \mathbf A ( \vecpartial_{ \mathbf A } \cdot \vecpartial_{ \mathbf A } ) - \vecpartial ( \mathbf A \cdot \vecpartial_{ \mathbf A } ) \\[2pt]
&= ( \vecpartial \cdot \vecpartial ) \mathbf A - ( \vecpartial \cdot \mathbf A ) \vecpartial_{ \mathbf A } \\[2pt]
&= \vecpartial \cdot ( \vecpartial \otimes \mathbf A ) - \vecpartial \cdot ( \mathbf A \otimes \vecpartial_{ \mathbf A } ) \\[2pt]
&= \vecpartial \cdot ( \vecpartial \wedge \mathbf A ) .
\end{aligned}
$$

For convenience, and introducing a double-arrow notation for dyadics, we define $$ \dyadic F \equiv \vecpartial \wedge \mathbf A $$, the antisymmetric **Faraday dyadic** (usually called the [Faraday tensor](https://en.wikipedia.org/wiki/Electromagnetic_tensor)). Then:

$$
\mathbf J = \vecpartial \cdot \dyadic F ,
$$

and the four-current is the four-divergence of the Faraday dyadic. That’s a nice way of writing the electromagnetic field equation, isn’t it?

### The Lorentz Four-Force

Now the Lorentz four-force:

$$
\mathbf F = \frac{q}{c} \Big[ \mathbf V \; \text{“} \mkern-5mu \times (\vecpartial \times \mkern-5mu \text{”} \, \mathbf A) \Big] = \frac{q}{c} \Big[ ( \vecpartial \wedge \mathbf A ) \cdot \mathbf V \Big] .
$$

With $$ \dyadic F $$:

$$
\mathbf F = \frac{q}{c} \, \dyadic F \cdot \mathbf V .
$$

Lovely! “Electrodyadics” (patent pending): all of classical electrodynamics in the field equation $$ \mathbf J = \vecpartial \cdot \dyadic F $$ and the force law $$ \mathbf F = \frac{q}{c} \, \dyadic F \cdot \mathbf V $$.

## Dyadic Components

Is that it? Well, in a sense, yes! Everything else is downstream. But let’s discuss dyadic components now and see where that leads us. To keep things simple, we'll only consider components in standard rectangular $$ (ct, x, y, z) $$ coordinates, and we won't get into basis vectors explicitly.

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
[ \mathbf A \cdot \mathbf B ] = [ \mathbf A ]^{\mathrm{T}} \eta [ \mathbf B ],
$$

and also of course:

$$
[ \mathbf A \cdot \mathbf B ] = [ \mathbf A ]^{\mathrm{T}} \eta [ \mathbf B ] = [ \mathbf B ]^{\mathrm{T}} \eta [ \mathbf A ] = [ \mathbf B \cdot \mathbf A ].
$$

### Dyadic Product in Matrix Notation

Now that we have the Minkowski dot product (between vectors) in matrix notation, we can use matrices to represent $$ \mathbf A \cdot ( \mathbf B \otimes \mathbf C ) = ( \mathbf A \cdot \mathbf B ) \mathbf C $$ in a way that reveals what $$ ( \mathbf B \otimes \mathbf C ) $$ means in terms of the vectors’ components. To maintain the “ABC” order, we need $$ [ \mathbf A \cdot \mathbf B ] = [ \mathbf A ]^{\mathrm{T}} \eta [ \mathbf B ] $$ (as opposed to $$ [ \mathbf A \cdot \mathbf B ] = [ \mathbf B ]^{\mathrm{T}} \eta [ \mathbf A ] $$), and since that’s a 1-by-1 we’ll have to put $$ \mathbf C $$ to its right as a *row*-matrix:

$$
[ \mathbf A \cdot \mathbf B ] [ \mathbf C ]^{\mathrm{T}}
=
[ \mathbf A ]^{\mathrm{T}} \eta [ \mathbf B ][ \mathbf C ]^{\mathrm{T}} .
$$

The matrix-representation of the dyadic product is therefore the [outer product](https://en.wikipedia.org/wiki/Outer_product):

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

Recall that under a [Lorentz boost](https://en.wikipedia.org/wiki/Lorentz_transformation), the components of the four-vector $$ \mathbf B $$ transform like so:

$$ [ \mathbf B {}^ \prime ] = \Lambda [ \mathbf B ] $$

(and likewise for $$ \mathbf C $$), where $$ \Lambda $$ is the symmetric matrix that for an arbitrary boost-velocity $$ \mathbf v $$ (with corresponding unit vector $$ \mathbf{ \hat v } $$ and Lorentz factor $$ \gamma $$) is:

$$
\Lambda
=
\begin{bmatrix}
\gamma & \left[ - \gamma \dfrac{ \mathbf v }{ c } \right] ^{ \mathrm T } \\
\left[ - \gamma \dfrac{ \mathbf v }{ c } \right] & I_3 + [ ( \gamma - 1 ) ( \mathbf{ \hat v } \otimes \mathbf{ \hat v } ) ]
\end{bmatrix}
$$

($$ I_3 $$ being the 3-by-3 [identity matrix](https://en.wikipedia.org/wiki/Identity_matrix)), which in the special case of a boost along the $$ x $$-axis reduces to the more familiar:

$$
\Lambda
=
\begin{bmatrix}
\gamma & - \gamma \dfrac{ v_x }{ c } & 0 & 0 \\
- \gamma \dfrac{ v_x }{ c } & \gamma & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix} .
$$

With $$ [ \mathbf B {}^ \prime ] = \Lambda [ \mathbf B ] $$ and $$ [ \mathbf C {}^ \prime ] = \Lambda [ \mathbf C ] $$ in hand, we see that the sixteen components of the four-dyad $$ \mathbf B \otimes \mathbf C $$ must transform under a Lorentz boost like this:

$$
[ \mathbf B {}^\prime ] [ \mathbf C {}^\prime ] ^{ \mathrm{T} }
=
( \Lambda [ \mathbf B ] ) ( \Lambda [ \mathbf C ] ) ^{ \mathrm{T} }
=
\Lambda [ \mathbf B ] [ \mathbf C ] ^{ \mathrm{T} } \Lambda ^{ \mathrm{T} } .
$$

By linearity, *all* four-dyadics are characterized by components that transform this way under a Lorentz boost. That is, for any four-dyadic $$ \dyadic D $$:

$$ [ \dyadic D {}^\prime ] = \Lambda [ \dyadic D ] \Lambda ^{ \mathrm{T} } , $$

and any sixteen quantities that transform together like this are necessarily the components of a four-dyadic.

### Components of the Faraday Dyadic

Applying what we've learned, we obtain the components of the Faraday dyadic:

$$
[ \dyadic F ] = [ \vecpartial \otimes \mathbf A ] - [ \vecpartial \otimes \mathbf A ]^\mathrm{T}
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

where we must remember that $$ \vecpartial = ( \partial^t, \, \partial^x, \, \partial^y, \, \partial^z ) = ( \frac{1}{c} \frac{\partial}{\partial t}, \, - \del ) $$ (i.e., the spatial components are *negative* partials). That comes to:

$$
[ \dyadic F ]
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
[ \dyadic F ]
=
\begin{bmatrix}
0 & -e_x & -e_y & -e_z \\
e_x & 0 & -b_z & b_y \\
e_y & b_z & 0 & -b_x \\
e_z & -b_y & b_x & 0
\end{bmatrix} .
$$

### Components of the Field Equation: Something Missing

In matrix notation, the field equation $$ \mathbf J = \vecpartial \cdot \dyadic F $$ reads:

$$
[ \mathbf J ]^\mathrm{T} = [ \vecpartial ]^\mathrm{T} \eta [ \dyadic F ]
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

where it’s understood that $$ \vecpartial $$ operates on $$ \dyadic F $$ (not on $$ \eta $$). Carrying out the multiplication gives the row-matrix representation of the four-vector $$ ( \rho, \, \mathbf j / c ) = ( \del \cdot \mathbf e, \, - \partial^t \mathbf e + \del \times \mathbf b ) $$, which constitutes the inhomogeneous pair of Maxwell’s equations (see the [last section](/physics/2019/07/16/vector-triple-products-in-minkowski-spacetime.html#lorentz-three-force-and-maxwells-equations) of Part I). But what about the other two? How do we get the homogeneous $$ \del \cdot \mathbf b = 0 $$ and $$ \partial^t \mathbf b + \del \times \mathbf e = \mathbf 0 $$ from a dyadic equation?

## Hodge Duality

Since the left sides of the homogeneous Maxwell equations have the same form as those of the inhomogeneous pair, and since the right sides together constitute a four-vector (the *zero* four-vector), it must be possible to express $$ (0, \, \mathbf 0) = ( \del \cdot \mathbf b, \, \partial^t \mathbf b + \del \times \mathbf e ) $$ as the four-divergence of some four-dyadic $$ \dyadic G $$ whose components are those of $$ \dyadic F $$ rearranged, with $$ \mathbf e $$ and $$ \mathbf b $$ swapped and with the appropriate signs flipped. But which signs?

### The Maxwell Dyadic (Homogeneous Maxwell Equations)

The answer (or *an* answer) reveals itself if we multiply both sides of $$ \partial^t \mathbf b + \del \times \mathbf e = \mathbf 0 $$ by $$ -1 $$, which yields $$ - \partial^t \mathbf b - \del \times \mathbf e = \mathbf 0 $$. Now we have $$ (0, \, \mathbf 0) = ( \del \cdot \mathbf b, \, - \partial^t \mathbf b - \del \times \mathbf e ) $$ to compare with $$ ( \rho, \, \mathbf j / c ) = ( \del \cdot \mathbf e, \, - \partial^t \mathbf e + \del \times \mathbf b ) $$, and we see that we should replace $$ \mathbf e $$ with $$ \mathbf b $$ and $$ \mathbf b$$ with $$ - \mathbf e $$. So:

$$
[ \dyadic G ]
=
\begin{bmatrix}
0 & -b_x & -b_y & -b_z \\
b_x & 0 & e_z & -e_y \\
b_y & -e_z & 0 & e_x \\
b_z & e_y & -e_x & 0
\end{bmatrix} ,
$$

or

$$
[ \dyadic G ]
=
\begin{bmatrix}
0 & \partial^y A^z - \partial^z A^y & \partial^z A^x - \partial^x A^z & \partial^x A^y - \partial^y A^x \\
\partial^z A^y - \partial^y A^z & 0 & \partial^z A^{ct} - \partial^{ct} A^z & \partial^{ct} A^y - \partial^y A^{ct} \\
\partial^x A^z - \partial^z A^x & \partial^{ct} A^z - \partial^z A^{ct} & 0 & \partial^x A^{ct} - \partial^{ct} A^x \\
\partial^y A^x - \partial^x A^y & \partial^y A^{ct} - \partial^{ct} A^y & \partial^{ct} A^x - \partial^x A^{ct} & 0
\end{bmatrix} ,
$$

and:

$$
\vecpartial \cdot \dyadic G = \boldsymbol{\emptyset} ,
$$

where $$ \boldsymbol \emptyset $$ is the zero four-vector.

We'll call $$ \dyadic G $$ the **Maxwell dyadic**. To verify that it really is a four-dyadic, check that its components transform under a Lorentz boost like $$ [ \dyadic G {}^\prime ] = \Lambda [ \dyadic G ] \Lambda ^{ \mathrm{T} } $$, using the fact that $$ \vecpartial $$ and $$ \mathbf A $$ are four-vectors. Note that because it’s antisymmetric, we would have obtained its additive inverse (*whose divergence also vanishes*) if we’d instead replaced $$ \mathbf b $$ with $$ \mathbf e $$ and $$ \mathbf e $$ with $$ - \mathbf b $$. The choice we made seems to be more common in the literature.

### Hodge Duality (for Antisymmetric Minkowski Dyadics)

The Maxwell dyadic’s component-rotating/sign-flipping relationship with the Faraday dyadic is called [**Hodge duality**](https://en.wikipedia.org/wiki/Hodge_star_operator), and we say that $$ \dyadic G $$ is the *Hodge dual* of $$ \dyadic F $$:

$$
\dyadic G \equiv \star \dyadic F .
$$

If we perform the same component-rotating/sign-flipping procedure on $$ \dyadic G $$, we’ll end up with $$ - \dyadic F $$, so that $$ \star \dyadic G = \star \star \dyadic F = - \dyadic F = ( \vecpartial \wedge \mathbf A )^{\mathrm{T}} $$. Then the Hodge dual of *that* is $$ - \dyadic G $$, whose Hodge dual brings us back to $$ \dyadic F $$.

Just as the magnetic field is a [pseudovector](https://en.wikipedia.org/wiki/Pseudovector) that gains an extra sign-flip under “orientation-reversing” coordinate transformations (like reflection across an axis), the Maxwell dyadic is a *pseudodyadic* that does the same. Both are examples of [pseudotensors](https://en.wikipedia.org/wiki/Pseudotensor).

### Hodge Duality (a Bit) More Generally

Hodge duality isn’t specific to antisymmetric Minkowski dyadics. Other types of geometric objects have Hodge duals, too, and that includes vectors and scalars. The mathematical toolkit we’re using isn’t equipped to handle the more advanced facets of this topic&mdash;for that, something like differential forms or index gymnastics is necessary&mdash;but a few remarks are in order.

We’ve taken for granted that scalars, vectors, and dyadics are all geometric objects. Specifically, they are all *tensors*, characterized by components that transform a certain way under coordinate transformations (we’ve already discussed how four-vectors and four-dyadics transform under a Lorentz boost). A tensor’s **rank** tells you how many indices you need to uniquely identify one of its components. A scalar is a rank-0 tensor, a vector is a rank-1 tensor, a dyadic is a rank-2 tensor, and so on.

In an $$ n $$-dimensional space with a dot-product [signature](https://en.wikipedia.org/wiki/Metric_signature) whose parity is $$ s $$ (e.g., $$ s = 1 $$ for Euclidean space, but $$ s = -1 $$ for Minkowski spacetime because the determinant of $$ \eta $$ is negative), the Hodge dual maps an antisymmetric tensor of rank $$ k $$ to an antisymmetric *pseudo*tensor of rank $$ n - k $$, and vice versa (all vectors and scalars are regarded as antisymmetric in this context). The Hodge dual of the Hodge dual is either the original tensor or its additive inverse: if $$ n $$ is odd, then $$ s $$ alone determines which it is ($$ s = 1 $$ means original, $$ s = -1 $$ means additive inverse); if $$ n $$ is even, then it’s a little more complicated, and the formula $$ (-1)^k s $$ determines which it is (again, positive means original, negative means additive inverse).

So in 4-dimensional Minkowski spacetime, the Hodge dual maps rank-2 to rank-2 (dyadics to dyadics), rank-4 to rank-0 (scalars), rank-3 to rank-1 (vectors), and vice versa for all of the above, with the double Hodge dual returning the additive inverse of the original tensor in all but the rank-1/rank-3 case. But in 3-dimensional Euclidean space, the Hodge dual maps between rank-3 and rank-0 and between rank-2 and rank-1, with the double Hodge dual *always* returning the original tensor.

### Hodge Duality for Three-Vectors and Three-Dyadics

For example, the Hodge dual of the cross product is the three-vector wedge product (and vice versa):

$$ \star \star ( \mathbf q \wedge \mathbf w ) = \star ( \mathbf q \times \mathbf w ) = \mathbf q \wedge \mathbf w . $$

This makes sense, as in matrix notation:

$$
[ \mathbf q \wedge \mathbf w ]
=
[ \mathbf q ][ \mathbf w ]^{\mathrm{T}} - [ \mathbf w ][ \mathbf q ]^{\mathrm{T}}
=
\begin{bmatrix}
0 & q_x w_y - w_x q_y & q_x w_z - w_x q_z \\
q_y w_x - w_y q_x & 0 & q_y w_z - w_y q_z \\
q_z w_x - w_z q_x & q_z w_y - w_z q_y & 0
\end{bmatrix} ,
$$

which is:

$$
\begin{bmatrix}
0 & ( \mathbf q \times \mathbf w )_z & - ( \mathbf q \times \mathbf w )_y \\
-( \mathbf q \times \mathbf w )_z & 0 & ( \mathbf q \times \mathbf w )_x \\
( \mathbf q \times \mathbf w )_y & -( \mathbf q \times \mathbf w )_x & 0
\end{bmatrix} .
$$

The Hodge dual of *any* three-vector is a three-dyadic with that pattern of components. We can now write the Faraday dyadic in matrix notation like this:

$$
[ \dyadic F ]
=
\begin{bmatrix}
0 & - [ \mathbf e ]^\mathrm{T} \\
[ \mathbf e ] & - [ \star \mathbf b ]
\end{bmatrix} ,
$$

and the Maxwell dyadic like this:

$$
[ \dyadic G ]
=
\begin{bmatrix}
0 & - [ \mathbf b ]^\mathrm{T} \\
[ \mathbf b ] & [ \star \mathbf e ]
\end{bmatrix} .
$$

Each member of a “Hodge pair” contains the same information as its counterpart, but one is a pseudotensor. In the Hodge pair $$ \dyadic F $$ and $$ \dyadic G $$, the pseudotensor is the four-dyadic $$ \dyadic G $$. In the Hodge pair $$ \mathbf e $$ and $$ \star \mathbf e $$, the pseudotensor is the three-dyadic $$ \star \mathbf e $$. In the Hodge pair $$ \mathbf b $$ and $$ \star \mathbf b $$, the pseudotensor is the three-vector $$ \mathbf b $$.

### The Poincaré Lemma

Having defined the Maxwell (pseudo)dyadic as the Hodge dual of the Faraday dyadic, we can appreciate that the divergencelessness of the former is an instance of a mathematical identity: the four-divergence of the Hodge dual of a four-vector field’s “differential wedge product” is zero. That’s a mouthful! It’s easier to see in an equation:

$$
\vecpartial \cdot \star ( \vecpartial \wedge \mathbf A ) = \boldsymbol \emptyset .
$$

You can verify this in the trenches by writing $$ \vecpartial \cdot \dyadic G $$ in matrix notation (explicitly in terms of $$ \mathbf A $$) and calculating any particular component. You’ll end up with six terms, each of which is a mixed-partial of a component of $$ \mathbf A $$, and each of which is canceled by its additive inverse. For example, the time component looks like this:

$$
( \vecpartial \cdot \dyadic G )^{t} = - \partial^x ( \partial^z A^y - \partial^y A^z ) - \partial^y ( \partial^x A^z - \partial^z A^x ) - \partial^z ( \partial^y A^x - \partial^x A^y ) = 0.
$$

The point is that we get $$ \vecpartial \cdot \dyadic G = \boldsymbol \emptyset $$ “for free” by virtue of the Faraday dyadic’s having the form $$ \vecpartial \wedge \mathbf A $$.

This rule $$ \vecpartial \cdot \star ( \vecpartial \wedge \mathbf A ) = \boldsymbol \emptyset $$ is directly analogous to the divergencelessness of the curl in three-dimensional Euclidean space. Indeed, $$ \del \cdot \mathbf b $$ is the time component of $$ \vecpartial \cdot \dyadic G $$, and $$ \mathbf b = \del \times \mathbf a $$. Moreover, the divergencelessness of the curl can likewise be written with the Hodge dual of the wedge product:

$$ \del \cdot \star ( \del \wedge \mathbf a ) = 0 . $$

In the language of [differential forms](https://en.wikipedia.org/wiki/Differential_form), both of these rules can be expressed as back-to-back applications of the [exterior derivative](https://en.wikipedia.org/wiki/Exterior_derivative), which is a generalization of our “differential wedge product” ($$ \vecpartial \wedge \text{_} $$ or $$ \del \wedge \text{_} $$). The principle that the double exterior derivative vanishes is called the [Poincaré lemma](https://en.wikipedia.org/wiki/Closed_and_exact_differential_forms#Poincar%C3%A9_lemma)&mdash;again, we’re reaching the limits of our mathematical toolkit, but the basic geometric idea here is that “the boundary of a boundary is zero” (as John Wheeler famously put it). Another manifestation of the Poincaré lemma is the curl-lessness of the gradient, which can *also* be expressed with the Hodge dual and the wedge product:

$$
\star ( \del \wedge ( \del f ) ) = \mathbf 0 .
$$

Because the order of mixed partials is reversible, $$ \del \wedge ( \del f ) $$ is just $$ ( \del \wedge \del ) f $$ (write out the components explicitly if you need convincing), and that vanishes trivially ($$ \del \otimes \del - \del \otimes \del $$), so this is a beautifully simple way to *derive* the gradient’s curl-lessness.

And that’s it for Part II! I’m planning another part (or two?) that will use the tools we’ve developed to cover the electromagnetic stress&ndash;energy tensor and the electromagnetic Lagrangians (for both a particle and the field).

For more details, see my [little treatise](https://drive.google.com/open?id=0BzbijOFcLYkTSWJ5R0s5U1ZMYWM).
