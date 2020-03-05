---
layout: post
title:  "Vector Triple Products in Minkowski Spacetime"
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

$$ \vec a \times (\vec b \times \vec c) = \vec b (\vec a \cdot \vec c) - \vec c (\vec a \cdot \vec b) .$$

The [cross product](https://en.wikipedia.org/wiki/Cross_product) \\( \vec b \times \vec c \\) is perpendicular to \\( \vec b \\) and \\( \vec c \\) and defined only in three dimensions (where an axis that’s orthogonal to a pair of vectors is unique). The vector triple product \\( \vec a \times (\vec b \times \vec c) \\), on the other hand, is a linear combination of \\( \vec b \\) and \\( \vec c \\) and *lies in the plane they span*, so there’s nothing stopping us from using it in its “bac - cab” form in contexts other than three-dimensional Euclidean space.

### Four-Vector Triple Product

Accordingly, we can define a “vector triple product” in four-dimensional Minkowski spacetime:

$$ \vec A \; \text{“} \mkern-5mu \times (\vec B \times \mkern-5mu \text{”} \, \vec C) = \vec B (\vec A \cdot \vec C) - \vec C (\vec A \cdot \vec B). $$

Here the dot means the *Minkowski* dot product (we’ll use capital letters for four-vectors in this post), and the scare quotes on the left side remind us that the cross product itself isn’t actually defined in Minkowski spacetime (don't take the \\(\times\\) notation literally!).

If you need a refresher, a four-vector in standard Minkowski coordinates has one time component and three Cartesian spatial components that together obey the [Lorentz transformation](https://en.wikipedia.org/wiki/Lorentz_transformation). Adopting the \\( (+, -, -, -) \\) sign convention, the [Minkowski dot product](https://en.wikipedia.org/wiki/Four-vector#Standard_basis,_(+%E2%88%92%E2%88%92%E2%88%92)_signature) of \\( \vec Q = (Q^t, Q^x, Q^y, Q^z) = (Q^t, \vec q) \\) and \\( \vec W = (W^t, \vec w) \\) is:

$$
\vec Q \cdot \vec W = Q^t W^t - (\vec q \cdot \vec w) ,
$$

where \\( \vec q \cdot \vec w = q_x w_x + q_y w_y + q_z w_z = Q^x W^x + Q^y W^y + Q^z W^z\\) is the [Euclidean dot product](https://en.wikipedia.org/wiki/Dot_product) (we’ll use superscript indices for four-vector components and subscript indices for three-vector components).

### Adding Curl to the Mix

A special case of the vector triple product is when the “inner” cross product is the [curl](https://en.wikipedia.org/wiki/Curl_(mathematics)) of a [vector field](https://en.wikipedia.org/wiki/Vector_field) \\( \vec c = \vec c (\vec r) \\) (using \\( \vec r \\) for the position vector):

$$
\begin{aligned}
\vec a \times (\vec \nabla \times \vec c) &= \vec \nabla _{\vec c} (\vec a \cdot \vec c) - \vec c (\vec a \cdot \vec \nabla _{\vec c}) \\
&= \vec \nabla _{\vec c} (\vec a \cdot \vec c) - (\vec a \cdot \vec \nabla) \vec c ,
\end{aligned}
$$

where the [subscript](https://en.wikipedia.org/wiki/Vector_calculus_identities#Special_notations) indicates that \\( \vec \nabla \\) (“del”) operates on \\( \vec c \\) and only on \\( \vec c \\), regardless of its placement in a term. Note that because the [curl of a gradient](https://en.wikipedia.org/wiki/Vector_calculus_identities#Curl_of_gradient_is_zero) is always the zero vector, this differential vector triple product is unchanged by a transformation that takes \\( \vec c \\) to (\\( \vec c + \vec \nabla f \\)) for *any* scalar field \\( f = f (\vec r) \\):

$$\vec a \times [\vec \nabla \times (\vec c + \vec \nabla f)] = \vec a \times (\vec \nabla \times \vec c) ,$$

or using the “bac - cab” expansion:

$$
\begin{aligned}
\vec a \times [\vec \nabla \times (\vec c + \vec \nabla f)] &= \vec \nabla _{\vec c \, + \vec \nabla f} \, [\vec a \cdot (\vec c + \vec \nabla f)] - (\vec a \cdot \vec \nabla) (\vec c + \vec \nabla f) \\
&= \vec \nabla _{\vec c} (\vec a \cdot \vec c) + \vec \nabla _{f} (\vec a \cdot \vec \nabla f) - (\vec a \cdot \vec \nabla) \vec c - (\vec a \cdot \vec \nabla) \vec \nabla f \\
&= \vec \nabla _{\vec c} (\vec a \cdot \vec c) - (\vec a \cdot \vec \nabla) \vec c \\
&= \vec a \times (\vec \nabla \times \vec c),
\end{aligned}
$$

because for the scalar \\( f \\) we have \\( \vec \nabla _{f} (\vec a \cdot \vec \nabla f) = \vec \nabla _{f} (\vec a \cdot \vec \nabla) f = (\vec a \cdot \vec \nabla) \vec \nabla f \\) (if you need convincing write it out in terms of components).

The “four-del” is:

$$\vec \partial = \left( \frac{1}{c} \, \frac{\partial}{\partial t} , \, - \vec \nabla \right)$$

(\\( c \\) is the speed of light, and yes, that’s a negative sign&mdash;without it the four “components” [wouldn’t obey the Lorentz transformation](http://www.feynmanlectures.caltech.edu/II_25.html#Ch25-S3) and thus wouldn’t together constitute a four-vector operator). With \\( \vec R \\) as the [four-position](https://en.wikipedia.org/wiki/Four-vector#Four-position), the *Minkowski* differential vector triple product for a four-vector field \\( \vec C = \vec C ( \vec R ) \\) is:

$$
\vec A \; \text{“} \mkern-5mu \times (\vec \partial \times \mkern-5mu \text{”} \, \vec C) = \vec \partial _{\vec C} (\vec A \cdot \vec C) - (\vec A \cdot \vec \partial) \vec C .
$$

The resulting vector is likewise unchanged by a transformation that takes \\( \vec C \\) to (\\( \vec C + \vec \partial F \\)) for any spacetime scalar field \\( F = F (\vec R) \\), though now we can *only* show this with the “bac - cab” side:

$$
\begin{aligned}
\vec A \; \text{“} \mkern-5mu \times [ \vec \partial \times \mkern-5mu \text{”} \, ( \vec C + \vec \partial F ) ] &= \vec \partial _{\vec C \, + \, \vec \partial F} \, [\vec A \cdot (\vec C + \vec \partial F)] - (\vec A \cdot \vec \partial) (\vec C + \vec \partial F) \\
&= \vec \partial _{\vec C} (\vec A \cdot \vec C) + (\vec A \cdot \vec \partial) \vec \partial F - (\vec A \cdot \vec \partial) \vec C - (\vec A \cdot \vec \partial) \vec \partial F \\
&= \vec \partial _{\vec C} (\vec A \cdot \vec C) - (\vec A \cdot \vec \partial) \vec C \\
&= \vec A \; \text{“} \mkern-5mu \times (\vec \partial \times \mkern-5mu \text{”} \, \vec C).
\end{aligned}
$$

### The Double Curl

Then there’s the *extra* special case of the [curl of the curl](https://en.wikipedia.org/wiki/Vector_calculus_identities#Curl_of_curl), which outputs a vector *field*:

$$
\begin{aligned}
\vec \nabla \times (\vec \nabla \times \vec c) &= \vec \nabla (\vec \nabla \cdot \vec c) - (\vec \nabla \cdot \vec \nabla) \vec c \\
&= \vec \nabla (\vec \nabla \cdot \vec c) - \nabla^2 \vec c ,
\end{aligned}
$$

with \\( \nabla^2 = \vec \nabla \cdot \vec \nabla \\) as the [(vector) Laplacian](https://en.wikipedia.org/wiki/Vector_Laplacian), a scalar operator. The four-vector “double curl” is:

$$
\begin{aligned}
\vec \partial \; \text{“} \mkern-5mu \times (\vec \partial \times \mkern-5mu \text{”} \, \vec C) &= \vec \partial (\vec \partial \cdot \vec C) - (\vec \partial \cdot \vec \partial) \vec C \\
&= \vec \partial (\vec \partial \cdot \vec C) - \Box \vec C ,
\end{aligned}
$$

with \\( \Box = \vec \partial \cdot \vec \partial \\) as the [d’Alembertian](https://en.wikipedia.org/wiki/D%27Alembert_operator). Taking \\( \vec C \\) to (\\( \vec C + \vec \partial F \\)) here looks like:

$$
\begin{aligned}
\vec \partial \; \text{“} \mkern-5mu \times [ \vec \partial \times \mkern-5mu \text{”} \, ( \vec C + \vec \partial F ) ] &= \vec \partial [\vec \partial \cdot (\vec C + \vec \partial F)] - \Box (\vec C + \vec \partial F) \\
&= \vec \partial (\vec \partial \cdot \vec C) + \vec \partial \Box F - \Box \vec C - \Box \vec \partial F \\
&= \vec \partial (\vec \partial \cdot \vec C) - \Box \vec C \\
&= \vec \partial \; \text{“} \mkern-5mu \times (\vec \partial \times \mkern-5mu \text{”} \, \vec C) ,
\end{aligned}
$$

where we’ve used \\( \Box \vec \partial = \vec \partial \Box \\) (because \\( \Box \\) is a scalar operator).

## Covariant Electrodynamics, Four-Vectors Only

The physics is really pretty simple now. We’ll do this in [Heaviside&ndash;Lorentz units](https://en.wikipedia.org/wiki/Lorentz%E2%80%93Heaviside_units).

### Four-Current Density, Four-Potential, Lorenz Gauge

Charge- and current-densities together constitute a four-vector \\( \vec J = (\rho, \vec j / c) \\) called the [four-current density](https://en.wikipedia.org/wiki/Four-current), which is the electromagnetic source field. (Usually it’s defined as \\((\rho c , \vec j)\\), but dividing by \\( c \\) now saves us from having to divide \\( \vec J \\) by \\( c \\) later when it appears in other equations.) We then define the [four-potential](https://en.wikipedia.org/wiki/Electromagnetic_four-potential) \\( \vec A \\) as any four-vector field whose (negative) “double curl” is the four-current density:

$$
\begin{aligned}
\vec J &= - \vec \partial \; \text{“} \mkern-5mu \times (\vec \partial \times \mkern-5mu \text{”} \, \vec A) \\
&= \Box \vec A - \vec \partial (\vec \partial \cdot \vec A) .
\end{aligned}
$$

We haven’t yet established why we’d care about the four-potential, but this equation tells us how the “value” of \\( \vec A \\) at a given spacetime location is determined by the value of \\( \vec J \\) elsewhere in spacetime. Scare quotes because \\( \vec A \\) isn’t uniquely defined: remember, the above differential triple product is unchanged by a [“gauge” transformation](https://en.wikipedia.org/wiki/Gauge_theory#Classical_electromagnetism) that takes \\( \vec A \\) to (\\( \vec A + \vec \partial \psi \\)) for *any* spacetime scalar field \\( \psi \\). And look what happens if we choose a \\( \psi \\) that satisfies \\( \Box \psi = - \vec \partial \cdot \vec A \\):

$$
\begin{aligned}
\Box ( \vec A + \vec \partial \psi ) - \vec \partial [ \vec \partial \cdot ( \vec A + \vec \partial \psi ) ] &= \Box ( \vec A + \vec \partial \psi ) - \vec \partial ( \vec \partial \cdot \vec A + \Box \psi ) \\
&= \Box (\vec A + \vec \partial \psi) .
\end{aligned}
$$

We’re left with just a [wave equation](https://en.wikipedia.org/wiki/Wave_equation) for the “new” four-potential \\( \vec A + \vec \partial \psi \\), which we see is divergenceless: \\( \vec \partial \cdot (\vec A + \vec \partial \psi) = 0\\). Making this transformation is called imposing the [Lorenz gauge](https://en.wikipedia.org/wiki/Lorenz_gauge_condition), and it’s always possible to do. For any *divergenceless* \\( \vec A \\), then:

$$\vec J = \Box \vec A = \left( \frac{1}{c^2} \, \frac{\partial^2}{\partial t^2} - \nabla^2 \right) \vec A .$$

So in the Lorenz gauge, a non-zero value of \\( \vec J \\) at a position in spacetime generates a commensurate disturbance in the \\( \vec A \\) field that spreads outward through space at the speed of light; the sum of all such disturbances passing through a location in space at a particular time determines the “value” of the (Lorenz-gauge) \\( \vec A \\) field at that spacetime point. (We still need scare quotes because for any scalar \\( \eta \\) that satisfies \\( \Box \eta = 0 \\), we get \\( \Box (\vec A + \vec \partial \eta) = \Box \vec A + \vec \partial \Box \eta = \Box \vec A \\), meaning that we have some “gauge freedom” even within the Lorenz gauge.)

### Lorentz Four-Force

The reason we care about the four-potential is the following empirical result:

$$
\begin{aligned}
\vec F &= \frac{q}{c} \left[ \vec V \; \text{“} \mkern-5mu \times (\vec \partial \times \mkern-5mu \text{”} \, \vec A) \right] \\[5pt]
&= \frac{q}{c} \left[ \vec \partial _{\vec A} \left( \vec V \cdot \vec A  \right) - \left( \vec V \cdot \vec \partial \right) \vec A \right] .
\end{aligned}
$$

This is the physical effect that derivatives of the local \\( \vec A \\) field have on a test charge at a given spacetime location. Here \\( q \\) is the particle’s charge, \\( \vec V \\) is its [four-velocity](https://en.wikipedia.org/wiki/Four-velocity#Definition_of_the_four-velocity), and \\( \vec F \\) is the resulting [four-force](https://en.wikipedia.org/wiki/Four-force) exerted on it (the full four-vector version of the [Lorentz force](https://en.wikipedia.org/wiki/Lorentz_force)).

We know from our mathematical preliminaries that this equation is unaffected by a gauge transformation of \\( \vec A \\), so it holds for *any* valid four-potential. Still, it’s most intuitive to think about all this in the Lorenz gauge:

- charge- and current-densities (the \\( \vec J \\) field) generate disturbances in the (Lorenz-gauge) \\( \vec A \\) field that travel outward through space at the speed of light;
- the sum of all such disturbances passing through a spacetime location determines the “value” of the (Lorenz-gauge) \\( \vec A \\) field there/then;
- if there’s a particle at that spacetime location, it’s subjected to a four-force determined by its charge, its four-velocity, and the derivatives of the local (Lorenz-gauge) four-potential.

That’s how “information” about charges travels through spacetime and physically affects other charges.

Except for the [radiation reaction](https://en.wikipedia.org/wiki/Abraham%E2%80%93Lorentz_force#Abraham%E2%80%93Lorentz%E2%80%93Dirac_force), this is classical electrodynamics in a nutshell!

### Lorentz Three-Force and Maxwell’s Equations

To extract from this formalism the more familiar three-vector relations (the Lorentz three-force and [Maxwell’s equations](https://en.wikipedia.org/wiki/Lorentz%E2%80%93Heaviside_units#Maxwell's_equations_with_sources)), we have to put the Lorentz four-force into component form. The four-velocity’s component form is \\( \vec V = ( \gamma c, \gamma \vec v) \\), where \\( \vec v \\) is the regular three-velocity and \\( \gamma = [1 - (v /c)^2 ]^{-1/2} \\) is the [Lorentz factor](https://en.wikipedia.org/wiki/Lorentz_factor). For the four-potential we’ll use \\( \vec A = (A^t , \vec a) \\), and for the four-del we’ll write \\( \vec \partial = (\partial^t , - \vec \nabla ) \\) with the understanding that \\( \partial^t = \frac{1}{c} \frac{\partial}{\partial t} \\).

So we want to put the following equation into component form:

$$\vec F = \frac{q}{c} \left[ \vec \partial _{\vec A} \left( \vec V \cdot \vec A  \right) - \left( \vec V \cdot \vec \partial \right) \vec A \right] . $$

First carry out the Minkowski dot products, factor out \\( \gamma \\), and distribute \\( c^{-1} \\):

$$
\begin{aligned}
\vec F &= \frac{q}{c} \left[ \vec \partial _{\vec A} \left( \gamma c A^t - \gamma \vec v \cdot \vec a \right) - \left( \gamma c \partial^t - \gamma \vec v \cdot [- \vec \nabla] \right) \vec A \right] \\[3pt]
&= \gamma q \left[ \vec \partial A^t - \vec \partial _{\vec a} \left( \frac{\vec v}{c} \cdot \vec a \right) - \partial^t \vec A - \left( \frac{\vec v}{c} \cdot \vec \nabla \right) \vec A \right] .
\end{aligned}
$$

The time component is now:

$$
\begin{aligned}
F^t &= \gamma q \left[ \partial^t A^t - \left( \frac{\vec v}{c} \cdot \partial^t \vec a \right) - \partial^t A^t - \left( \frac{\vec v}{c} \cdot \vec \nabla A^t \right) \right] \\[4pt]
&= \gamma q \, \frac{\vec v}{c} \cdot \left( - \partial^t \vec a - \vec \nabla A^t \right) .
\end{aligned}
$$

The space component we’ll notate \\( \gamma \vec f \\) (so that \\( \vec f \\) is the regular three-force), and it’s:

$$
\begin{aligned}
\gamma \vec f &= \gamma q \left[ - \vec \nabla A^t + \vec \nabla _{\vec a} \left( \frac{\vec v}{c} \cdot \vec a \right) - \partial^t \vec a - \left( \frac{\vec v}{c} \cdot \vec \nabla \right) \vec a \right] \\[4pt]
&= \gamma q \left[ - \partial^t \vec a - \vec \nabla A^t + \frac{\vec v}{c} \times ( \vec \nabla \times \vec a ) \right] ,
\end{aligned}
$$

where we’ve used the “bac - cab” rule. Defining the electric field as \\( \vec e = - \partial^t \vec a - \vec \nabla A^t \\) and the magnetic field as \\( \vec b = \vec \nabla \times \vec a \\), we have:

$$\vec F = \gamma q \left( \frac{\vec v}{c} \cdot \vec e, \, \vec e + \frac{\vec v}{c} \times \vec b \right), $$

and the spatial component is indeed the Lorentz three-force (times \\( \gamma \\)).

To get Maxwell’s equations, we just need to relate our new \\( \vec e \\) and \\( \vec b \\) fields to the charge- and current-densities. This is easiest in the Lorenz gauge, where the four-potential is divergenceless (i.e., \\( \partial^t A^t = - \vec \nabla \cdot \vec a \\)), and where \\( (\rho, \vec j / c) = \vec J = \Box \vec A = (\Box A^t, \Box \vec a) \\). First:

$$
\begin{aligned}
\rho &= \Box A^t \\
&= \partial^t (\partial^t A^t) - \nabla ^2 A^t \\
&= - \partial^t ( \vec \nabla \cdot \vec a ) - \vec \nabla \cdot \vec \nabla A^t \\
&= \vec \nabla \cdot ( -\partial^t \vec a - \vec \nabla A^t ) \\
\rho &= \vec \nabla \cdot \vec e .
\end{aligned}
$$

And second:

$$
\begin{aligned}
\frac{\vec j}{c} &= \Box \vec a \\
&= \partial^t ( \partial^t \vec a ) - \nabla ^2 \vec a \\
&= \partial^t ( \partial^t \vec a ) + \vec \nabla \times ( \vec \nabla \times \vec a ) - \vec \nabla ( \vec \nabla \cdot \vec a ) \\
&= \vec \nabla \times \vec b + \partial^t ( \partial^t \vec a ) - \vec \nabla ( \vec \nabla \cdot \vec a ) \\
&= \vec \nabla \times \vec b + \partial^t ( \partial^t \vec a ) + \vec \nabla ( \partial^t A^t ) \\
&= \vec \nabla \times \vec b + \partial^t ( \partial^t \vec a + \vec \nabla A^t ) \\
\frac{\vec j}{c} &= \vec \nabla \times \vec b - \partial^t \vec e .
\end{aligned}
$$

Those are the two “inhomogeneous” Maxwell equations. The “homogeneous” ones follow from a couple of vector calculus identities. First, because the divergence of a curl is always zero:

$$
\begin{aligned}
\vec \nabla \cdot \vec b &= \vec \nabla \cdot ( \vec \nabla \times \vec a ) \\
\vec \nabla \cdot \vec b &= 0 .
\end{aligned}
$$

And second, because the curl of a gradient is always the zero vector:

$$
\begin{aligned}
\vec \nabla \times \vec e + \partial^t \vec b &= \vec \nabla \times ( - \partial^t \vec a - \vec \nabla A^t ) + \partial^t ( \vec \nabla \times \vec a ) \\
&= - \vec \nabla \times \partial^t \vec a \; + \, \vec \nabla \times \partial^t \vec a \\
\vec \nabla \times \vec e + \partial^t \vec b &= \vec 0 .
\end{aligned}
$$

We’re done!

For more details, see my [little treatise](https://drive.google.com/open?id=0BzbijOFcLYkTSWJ5R0s5U1ZMYWM).
