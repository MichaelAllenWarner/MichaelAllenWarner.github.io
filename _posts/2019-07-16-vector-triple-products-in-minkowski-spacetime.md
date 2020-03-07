---
layout: post
title:  "Covariant Electrodynamics the Easy Way: Vector Triple Products in Minkowski Spacetime"
date:   2019-07-16 08:00:00 -0400
categories: physics
excerpt: >
  I show how the vector triple product can be extended to four-vectors in Minkowski spacetime, even though the cross product itself is undefined in four dimensions. This provides an easy and intuitive way of learning the basics of manifestly covariant electrodynamics (no need for rank-2 tensors or index gymnastics). As far as I know, my approach is unique.
usemathjax: true
---

In this post, I introduce [covariant electrodynamics](https://en.wikipedia.org/wiki/Covariant_formulation_of_classical_electromagnetism) in the least painful way I know: by extending the [vector triple product](https://en.wikipedia.org/wiki/Triple_product#Vector_triple_product) to [Minkowski spacetime](https://en.wikipedia.org/wiki/Minkowski_space). The reader is assumed to have some familiarity with [four-vectors](https://en.wikipedia.org/wiki/Four-vector) and Euclidean [vector calculus](https://en.wikipedia.org/wiki/Vector_calculus), but we won’t use any index gymnastics or explicit rank-2 tensors; just four-vectors.

I developed this approach myself, and I’ve found no other sources that employ it. If you’ve seen it elsewhere, please let me know (email address at the bottom of the page).

## Mathematical Preliminaries

### The “bac - cab” Rule

In three-dimensional Euclidean space, we have this lovely vector identity:

$$ \mathbf a \times (\mathbf b \times \mathbf c) = \mathbf b (\mathbf a \cdot \mathbf c) - \mathbf c (\mathbf a \cdot \mathbf b) .$$

The [cross product](https://en.wikipedia.org/wiki/Cross_product) $$ \mathbf b \times \mathbf c $$ is perpendicular to $$ \mathbf b $$ and $$ \mathbf c $$ and defined only in three dimensions (where an axis that’s orthogonal to a pair of vectors is unique). The vector triple product $$ \mathbf a \times (\mathbf b \times \mathbf c) $$, on the other hand, is a linear combination of $$ \mathbf b $$ and $$ \mathbf c $$, which is to say that it *lies in the plane they span* (its direction is given by the projection of $$ \mathbf a $$ onto that plane, rotated 90° in the $$ \mathbf c $$-to-$$ \mathbf b $$ sense&mdash;see the illustration below [from Wikipedia](https://upload.wikimedia.org/wikipedia/commons/e/ea/Cross_product_triple.svg)). So although the cross product is restricted to three-dimensional Euclidean space, there’s nothing stopping us from using the “bac - cab” combination in other contexts.

<span style="text-align: center; display: block; margin: 1.25rem auto 1.75rem auto; padding-right: 10%;">[![vector triple product](https://upload.wikimedia.org/wikipedia/commons/e/ea/Cross_product_triple.svg){:class="img-responsive"}](https://commons.wikimedia.org/wiki/File:Cross_product_triple.svg#/media/File:Cross_product_triple.svg)</span>

### Four-Vector Triple Product

Accordingly, we can define a “vector triple product” in four-dimensional Minkowski spacetime:

$$ \mathbf A \; \text{“} \mkern-5mu \times (\mathbf B \times \mkern-5mu \text{”} \, \mathbf C) = \mathbf B (\mathbf A \cdot \mathbf C) - \mathbf C (\mathbf A \cdot \mathbf B). $$

Here the dot means the *Minkowski* dot product (we’ll use capital letters for four-vectors in this post), and the scare quotes on the left side remind us that the cross product itself isn’t actually defined in Minkowski spacetime (don't take the $$\times$$ notation literally!).

If you need a refresher, a four-vector in standard Minkowski coordinates has one time component and three Cartesian spatial components that together obey the [Lorentz transformation](https://en.wikipedia.org/wiki/Lorentz_transformation). Adopting the $$ (+, -, -, -) $$ sign convention, the [Minkowski dot product](https://en.wikipedia.org/wiki/Four-vector#Standard_basis,_(+%E2%88%92%E2%88%92%E2%88%92)_signature) of $$ \mathbf Q = (Q^t, Q^x, Q^y, Q^z) = (Q^t, \mathbf q) $$ and $$ \mathbf W = (W^t, \mathbf w) $$ is:

$$
\mathbf Q \cdot \mathbf W = Q^t W^t - (\mathbf q \cdot \mathbf w) ,
$$

where $$ \mathbf q \cdot \mathbf w = q_x w_x + q_y w_y + q_z w_z = Q^x W^x + Q^y W^y + Q^z W^z$$ is the [Euclidean dot product](https://en.wikipedia.org/wiki/Dot_product) (we’ll use superscript indices for four-vector components and subscript indices for three-vector components).

### Adding Curl to the Mix

A special case of the vector triple product is when the “inner” cross product is the [curl](https://en.wikipedia.org/wiki/Curl_(mathematics)) of a [vector field](https://en.wikipedia.org/wiki/Vector_field) $$ \mathbf c = \mathbf c (\mathbf r) $$ (using $$ \mathbf r $$ for the position vector):

$$
\begin{aligned}
\mathbf a \times (\del \times \mathbf c) &= \del _{\mathbf c} (\mathbf a \cdot \mathbf c) - \mathbf c (\mathbf a \cdot \del _{\mathbf c}) \\[3pt]
&= \del _{\mathbf c} (\mathbf a \cdot \mathbf c) - (\mathbf a \cdot \del) \mathbf c ,
\end{aligned}
$$

where the [subscript](https://en.wikipedia.org/wiki/Vector_calculus_identities#Special_notations) indicates that $$ \del $$ (“del”) operates on $$ \mathbf c $$ and only on $$ \mathbf c $$, regardless of its placement in a term. Note that because the [curl of a gradient](https://en.wikipedia.org/wiki/Vector_calculus_identities#Curl_of_gradient_is_zero) is always the zero vector, this differential vector triple product is unchanged by a transformation that takes $$ \mathbf c $$ to ($$ \mathbf c + \del f $$) for *any* scalar field $$ f = f (\mathbf r) $$:

$$\mathbf a \times [\del \times (\mathbf c + \del f)] = \mathbf a \times (\del \times \mathbf c) ,$$

or using the “bac - cab” expansion:

$$
\begin{aligned}
\mathbf a \times [\del \times (\mathbf c + \del f)] &= \del _{\mathbf c \, + \del f} \, [\mathbf a \cdot (\mathbf c + \del f)] - (\mathbf a \cdot \del) (\mathbf c + \del f) \\[3pt]
&= \del _{\mathbf c} (\mathbf a \cdot \mathbf c) + \del _{f} (\mathbf a \cdot \del f) - (\mathbf a \cdot \del) \mathbf c - (\mathbf a \cdot \del) \del f \\[3pt]
&= \del _{\mathbf c} (\mathbf a \cdot \mathbf c) - (\mathbf a \cdot \del) \mathbf c \\[3pt]
&= \mathbf a \times (\del \times \mathbf c),
\end{aligned}
$$

because for the scalar $$ f $$ we have $$ \del _{f} (\mathbf a \cdot \del f) = \del _{f} (\mathbf a \cdot \del) f = (\mathbf a \cdot \del) \del f $$ (if you need convincing write it out in terms of components).

The “four-del” is:

$$\partialup = \left( \frac{1}{c} \, \frac{\partial}{\partial t} , \, - \del \right)$$

($$ c $$ is the speed of light, and yes, that’s a negative sign&mdash;without it the four “components” [wouldn’t obey the Lorentz transformation](http://www.feynmanlectures.caltech.edu/II_25.html#Ch25-S3) and thus wouldn’t together constitute a four-vector operator). With $$ \mathbf R $$ as the [four-position](https://en.wikipedia.org/wiki/Four-vector#Four-position), the *Minkowski* differential vector triple product for a four-vector field $$ \mathbf C = \mathbf C ( \mathbf R ) $$ is:

$$
\mathbf A \; \text{“} \mkern-5mu \times (\partialup \times \mkern-5mu \text{”} \, \mathbf C) = \partialup _{\mathbf C} (\mathbf A \cdot \mathbf C) - (\mathbf A \cdot \partialup) \mathbf C .
$$

The resulting vector is likewise unchanged by a transformation that takes $$ \mathbf C $$ to ($$ \mathbf C + \partialup F $$) for any spacetime scalar field $$ F = F (\mathbf R) $$, though now we can *only* show this with the “bac - cab” side:

$$
\begin{aligned}
\mathbf A \; \text{“} \mkern-5mu \times [ \partialup \times \mkern-5mu \text{”} \, ( \mathbf C + \partialup F ) ] &= \partialup _{\mathbf C \, + \, \partialup F} \, [\mathbf A \cdot (\mathbf C + \partialup F)] - (\mathbf A \cdot \partialup) (\mathbf C + \partialup F) \\[3pt]
&= \partialup _{\mathbf C} (\mathbf A \cdot \mathbf C) + (\mathbf A \cdot \partialup) \partialup F - (\mathbf A \cdot \partialup) \mathbf C - (\mathbf A \cdot \partialup) \partialup F \\[3pt]
&= \partialup _{\mathbf C} (\mathbf A \cdot \mathbf C) - (\mathbf A \cdot \partialup) \mathbf C \\[3pt]
&= \mathbf A \; \text{“} \mkern-5mu \times (\partialup \times \mkern-5mu \text{”} \, \mathbf C).
\end{aligned}
$$

### The Double Curl

Then there’s the *extra* special case of the [curl of the curl](https://en.wikipedia.org/wiki/Vector_calculus_identities#Curl_of_curl), which outputs a vector *field*:

$$
\begin{aligned}
\del \times (\del \times \mathbf c) &= \del (\del \cdot \mathbf c) - (\del \cdot \del) \mathbf c \\[2pt]
&= \del (\del \cdot \mathbf c) - \nabla^2 \mathbf c ,
\end{aligned}
$$

with $$ \nabla^2 = \del \cdot \del $$ as the [(vector) Laplacian](https://en.wikipedia.org/wiki/Vector_Laplacian), a scalar operator. The four-vector “double curl” is:

$$
\begin{aligned}
\partialup \; \text{“} \mkern-5mu \times (\partialup \times \mkern-5mu \text{”} \, \mathbf C) &= \partialup (\partialup \cdot \mathbf C) - (\partialup \cdot \partialup) \mathbf C \\[2pt]
&= \partialup (\partialup \cdot \mathbf C) - \Box \mathbf C ,
\end{aligned}
$$

with $$ \Box = \partialup \cdot \partialup $$ as the [d’Alembertian](https://en.wikipedia.org/wiki/D%27Alembert_operator). Taking $$ \mathbf C $$ to ($$ \mathbf C + \partialup F $$) here looks like:

$$
\begin{aligned}
\partialup \; \text{“} \mkern-5mu \times [ \partialup \times \mkern-5mu \text{”} \, ( \mathbf C + \partialup F ) ] &= \partialup [\partialup \cdot (\mathbf C + \partialup F)] - \Box (\mathbf C + \partialup F) \\[3pt]
&= \partialup (\partialup \cdot \mathbf C) + \partialup \Box F - \Box \mathbf C - \Box \partialup F \\[3pt]
&= \partialup (\partialup \cdot \mathbf C) - \Box \mathbf C \\[3pt]
&= \partialup \; \text{“} \mkern-5mu \times (\partialup \times \mkern-5mu \text{”} \, \mathbf C) ,
\end{aligned}
$$

where we’ve used $$ \Box \partialup = \partialup \Box $$ (because $$ \Box $$ is a scalar operator).

## Covariant Electrodynamics, Four-Vectors Only

The physics is really pretty simple now. We’ll do this in [Heaviside&ndash;Lorentz units](https://en.wikipedia.org/wiki/Lorentz%E2%80%93Heaviside_units).

### Four-Current Density, Four-Potential, Lorenz Gauge

Charge- and current-densities together constitute a four-vector $$ \mathbf J = (\rho, \, \mathbf j / c) $$ called the [four-current density](https://en.wikipedia.org/wiki/Four-current), which is the electromagnetic source field. (Usually it’s defined as $$(\rho c , \, \mathbf j)$$, but dividing by $$ c $$ now saves us from having to divide $$ \mathbf J $$ by $$ c $$ later when it appears in other equations.) We then define the [four-potential](https://en.wikipedia.org/wiki/Electromagnetic_four-potential) $$ \mathbf A $$ as any four-vector field whose (negative) “double curl” is the four-current density:

$$
\begin{aligned}
\mathbf J &= - \partialup \; \text{“} \mkern-5mu \times (\partialup \times \mkern-5mu \text{”} \, \mathbf A) \\[2pt]
&= \Box \mathbf A - \partialup (\partialup \cdot \mathbf A) .
\end{aligned}
$$

We haven’t yet established why we’d care about the four-potential, but this equation tells us how the “value” of $$ \mathbf A $$ at a given spacetime location is determined by the value of $$ \mathbf J $$ elsewhere in spacetime. Scare quotes because $$ \mathbf A $$ isn’t uniquely defined: remember, the above differential triple product is unchanged by a [“gauge” transformation](https://en.wikipedia.org/wiki/Gauge_theory#Classical_electromagnetism) that takes $$ \mathbf A $$ to ($$ \mathbf A + \partialup \psi $$) for *any* spacetime scalar field $$ \psi $$. And look what happens if we choose a $$ \psi $$ that satisfies $$ \Box \psi = - \partialup \cdot \mathbf A $$:

$$
\begin{aligned}
\Box ( \mathbf A + \partialup \psi ) - \partialup [ \partialup \cdot ( \mathbf A + \partialup \psi ) ] &= \Box ( \mathbf A + \partialup \psi ) - \partialup ( \partialup \cdot \mathbf A + \Box \psi ) \\[2pt]
&= \Box (\mathbf A + \partialup \psi) .
\end{aligned}
$$

We’re left with just a [wave equation](https://en.wikipedia.org/wiki/Wave_equation) for the “new” four-potential $$ \mathbf A + \partialup \psi $$, which we see is divergenceless: $$ \partialup \cdot (\mathbf A + \partialup \psi) = 0$$. Making this transformation is called imposing the [Lorenz gauge](https://en.wikipedia.org/wiki/Lorenz_gauge_condition), and it’s always possible to do. For any *divergenceless* $$ \mathbf A $$, then:

$$\mathbf J = \Box \mathbf A = \left( \frac{1}{c^2} \, \frac{\partial^2}{\partial t^2} - \nabla^2 \right) \mathbf A .$$

So in the Lorenz gauge, a non-zero value of $$ \mathbf J $$ at a position in spacetime generates a commensurate disturbance in the $$ \mathbf A $$ field that spreads outward through space at the speed of light; the sum of all such disturbances passing through a location in space at a particular time determines the “value” of the (Lorenz-gauge) $$ \mathbf A $$ field at that spacetime point. (We still need scare quotes because for any scalar $$ \eta $$ that satisfies $$ \Box \eta = 0 $$, we get $$ \Box (\mathbf A + \partialup \eta) = \Box \mathbf A + \partialup \Box \eta = \Box \mathbf A $$, meaning that we have some “gauge freedom” even within the Lorenz gauge.)

### Lorentz Four-Force

The reason we care about the four-potential is the following empirical result:

$$
\begin{aligned}
\mathbf F &= \frac{q}{c} \Big[ \mathbf V \; \text{“} \mkern-5mu \times (\partialup \times \mkern-5mu \text{”} \, \mathbf A) \Big] \\[5pt]
&= \frac{q}{c} \Big[ \partialup _{\mathbf A} \left( \mathbf V \cdot \mathbf A  \right) - \left( \mathbf V \cdot \partialup \right) \mathbf A \Big] .
\end{aligned}
$$

This is the physical effect that derivatives of the local $$ \mathbf A $$ field have on a test charge at a given spacetime location. Here $$ q $$ is the particle’s charge, $$ \mathbf V $$ is its [four-velocity](https://en.wikipedia.org/wiki/Four-velocity#Definition_of_the_four-velocity), and $$ \mathbf F $$ is the resulting [four-force](https://en.wikipedia.org/wiki/Four-force) exerted on it (the full four-vector version of the [Lorentz force](https://en.wikipedia.org/wiki/Lorentz_force)).

We know from our mathematical preliminaries that this equation is unaffected by a gauge transformation of $$ \mathbf A $$, so it holds for *any* valid four-potential. Still, it’s most intuitive to think about all this in the Lorenz gauge:

- charge- and current-densities (the $$ \mathbf J $$ field) generate disturbances in the (Lorenz-gauge) $$ \mathbf A $$ field that travel outward through space at the speed of light;
- the sum of all such disturbances passing through a spacetime location determines the “value” of the (Lorenz-gauge) $$ \mathbf A $$ field there/then;
- if there’s a particle at that spacetime location, it’s subjected to a four-force determined by its charge, its four-velocity, and the derivatives of the local (Lorenz-gauge) four-potential.

That’s how “information” about charges travels through spacetime and physically affects other charges.

Except for the [radiation reaction](https://en.wikipedia.org/wiki/Abraham%E2%80%93Lorentz_force#Abraham%E2%80%93Lorentz%E2%80%93Dirac_force), this is classical electrodynamics in a nutshell!

### Lorentz Three-Force and Maxwell’s Equations

To extract from this formalism the more familiar three-vector relations (the Lorentz three-force and [Maxwell’s equations](https://en.wikipedia.org/wiki/Lorentz%E2%80%93Heaviside_units#Maxwell's_equations_with_sources)), we have to put the Lorentz four-force into component form. The four-velocity’s component form is $$ \mathbf V = ( \gamma c, \gamma \mathbf v) $$, where $$ \mathbf v $$ is the regular three-velocity and $$ \gamma = [1 - (v /c)^2 ]^{-1/2} $$ is the [Lorentz factor](https://en.wikipedia.org/wiki/Lorentz_factor). For the four-potential we’ll use $$ \mathbf A = (A^t , \mathbf a) $$, and for the four-del we’ll write $$ \partialup = (\partial^t , - \del ) $$ with the understanding that $$ \partial^t = \frac{1}{c} \frac{\partial}{\partial t} $$.

So we want to put the following equation into component form:

$$\mathbf F = \frac{q}{c} \Big[ \partialup _{\mathbf A} \left( \mathbf V \cdot \mathbf A  \right) - \left( \mathbf V \cdot \partialup \right) \mathbf A \Big] . $$

First carry out the Minkowski dot products, factor out $$ \gamma $$, and distribute $$ c^{-1} $$:

$$
\begin{aligned}
\mathbf F &= \frac{q}{c} \Big[ \partialup _{\mathbf A} \left( \gamma c A^t - \gamma \mathbf v \cdot \mathbf a \right) - \left( \gamma c \, \partial^t - \gamma \mathbf v \cdot [- \del] \right) \mathbf A \Big] \\[3pt]
&= \gamma q \left[ \partialup A^t - \partialup _{\mathbf a} \left( \frac{\mathbf v}{c} \cdot \mathbf a \right) - \partial^t \mathbf A - \left( \frac{\mathbf v}{c} \cdot \del \right) \mathbf A \right] .
\end{aligned}
$$

The time component is now:

$$
\begin{aligned}
F^t &= \gamma q \left[ \partial^t A^t - \left( \frac{\mathbf v}{c} \cdot \partial^t \mathbf a \right) - \partial^t A^t - \left( \frac{\mathbf v}{c} \cdot \del A^t \right) \right] \\[4pt]
&= \gamma q \, \frac{\mathbf v}{c} \cdot \left( - \partial^t \mathbf a - \del A^t \right) .
\end{aligned}
$$

The space component we’ll notate $$ \gamma \mathbf f $$ (so that $$ \mathbf f $$ is the regular three-force), and it’s:

$$
\begin{aligned}
\gamma \mathbf f &= \gamma q \left[ - \del A^t + \del _{\mathbf a} \left( \frac{\mathbf v}{c} \cdot \mathbf a \right) - \partial^t \mathbf a - \left( \frac{\mathbf v}{c} \cdot \del \right) \mathbf a \right] \\[4pt]
&= \gamma q \left[ - \partial^t \mathbf a - \del A^t + \frac{\mathbf v}{c} \times ( \del \times \mathbf a ) \right] ,
\end{aligned}
$$

where we’ve used the “bac - cab” rule. Defining the electric field as $$ \mathbf e = - \partial^t \mathbf a - \del A^t $$ and the magnetic field as $$ \mathbf b = \del \times \mathbf a $$, we have:

$$\mathbf F = \gamma q \left( \frac{\mathbf v}{c} \cdot \mathbf e, \, \mathbf e + \frac{\mathbf v}{c} \times \mathbf b \right), $$

and the spatial component is indeed the Lorentz three-force (times $$ \gamma $$).

To get Maxwell’s equations, we just need to relate our new $$ \mathbf e $$ and $$ \mathbf b $$ fields to the charge- and current-densities. This is easiest in the Lorenz gauge, where the four-potential is divergenceless (i.e., $$ \partial^t A^t = - \del \cdot \mathbf a $$), and where $$ (\rho, \, \mathbf j / c) = \mathbf J = \Box \mathbf A = (\Box A^t, \, \Box \mathbf a) $$. First:

$$
\begin{aligned}
\rho &= \Box A^t \\[3pt]
&= \partial^t (\partial^t A^t) - \nabla ^2 A^t \\[3pt]
&= - \partial^t ( \del \cdot \mathbf a ) - \del \cdot \del A^t \\[3pt]
&= \del \cdot ( -\partial^t \mathbf a - \del A^t ) \\[3pt]
\rho &= \del \cdot \mathbf e .
\end{aligned}
$$

And second:

$$
\begin{aligned}
\frac{\mathbf j}{c} &= \Box \mathbf a \\
&= \partial^t ( \partial^t \mathbf a ) - \nabla ^2 \mathbf a \\[3pt]
&= \partial^t ( \partial^t \mathbf a ) + \del \times ( \del \times \mathbf a ) - \del ( \del \cdot \mathbf a ) \\[3pt]
&= \del \times \mathbf b + \partial^t ( \partial^t \mathbf a ) - \del ( \del \cdot \mathbf a ) \\[3pt]
&= \del \times \mathbf b + \partial^t ( \partial^t \mathbf a ) + \del ( \partial^t A^t ) \\[3pt]
&= \del \times \mathbf b + \partial^t ( \partial^t \mathbf a + \del A^t ) \\
\frac{\mathbf j}{c} &= \del \times \mathbf b - \partial^t \mathbf e .
\end{aligned}
$$

Those are the two “inhomogeneous” Maxwell equations. The “homogeneous” ones follow from a couple of vector calculus identities. First, because the divergence of a curl is always zero:

$$
\begin{aligned}
\del \cdot \mathbf b &= \del \cdot ( \del \times \mathbf a ) \\[2pt]
\del \cdot \mathbf b &= 0 .
\end{aligned}
$$

And second, because the curl of a gradient is always the zero vector:

$$
\begin{aligned}
\del \times \mathbf e + \partial^t \mathbf b &= \del \times ( - \partial^t \mathbf a - \del A^t ) + \partial^t ( \del \times \mathbf a ) \\[2pt]
&= - \del \times \partial^t \mathbf a \; + \, \del \times \partial^t \mathbf a \\[2pt]
\del \times \mathbf e + \partial^t \mathbf b &= \mathbf 0 .
\end{aligned}
$$

We’re done!

For more details, see my [little treatise](https://drive.google.com/open?id=0BzbijOFcLYkTSWJ5R0s5U1ZMYWM).
