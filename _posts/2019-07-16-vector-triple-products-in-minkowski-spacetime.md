---
layout: post
title:  "Vector Triple Products in Minkowski Spacetime"
date:   2019-07-16 08:00:00 -0400
categories: physics
excerpt: >
  I show how the vector triple product can be extended to four-vectors in Minkowski spacetime, even though the cross product itself is undefined in four dimensions. This provides an easy and intuitive way of learning the basics of manifestly covariant electrodynamics (no need for rank-2 tensors or index gymnastics). As far as I know, my approach is unique.
usemathjax: true
---

## Mathematical Preliminaries

### The “bac - cab” Rule

In three-dimensional Euclidean space, we have this lovely vector identity:

$$ \vec a \times (\vec b \times \vec c) = \vec b (\vec a \cdot \vec c) - \vec c (\vec a \cdot \vec b) .$$

The [cross product](https://en.wikipedia.org/wiki/Cross_product) \\( \vec b \times \vec c \\) is perpendicular to \\( \vec b \\) and \\( \vec c \\), but the [vector triple product](https://en.wikipedia.org/wiki/Triple_product#Vector_triple_product) \\( \vec a \times (\vec b \times \vec c) \\) lies in the plane spanned by \\( \vec b \\) and \\( \vec c \\). So even though the cross product is defined only in three dimensions (where an axis that’s orthogonal to a pair of vectors is unique), the vector triple product in its “bac - cab” form has no such limitation.

### Four-Vector Triple Product

Accordingly, we can define a “vector triple product” in four-dimensional [Minkowski spacetime](https://en.wikipedia.org/wiki/Minkowski_space):

$$ \vec A \; \text{“} \mkern-5mu \times (\vec B \times \mkern-5mu \text{”} \, \vec C) = \vec B (\vec A \cdot \vec C) - \vec C (\vec A \cdot \vec B). $$

Here the dot means the *Minkowski* dot product (we’ll use capital letters for [four-vectors](https://en.wikipedia.org/wiki/Four-vector) in this post), and the scare quotes on the left side remind us that the cross product itself isn’t actually defined in Minkowski spacetime.

If you need a refresher, a four-vector has one time component and three Cartesian spatial components that together obey the [Lorentz transformation](https://en.wikipedia.org/wiki/Lorentz_transformation). Adopting the \\( (+, -, -, -) \\) sign convention, the [Minkowski dot product](https://en.wikipedia.org/wiki/Four-vector#Standard_basis,_(+%E2%88%92%E2%88%92%E2%88%92)_signature) of \\( \vec Q = (Q^t, Q^x, Q^y, Q^z) = (Q^t, \vec q) \\) and \\( \vec W = (W^t, \vec w) \\) is:

$$
\vec Q \cdot \vec W = Q^t W^t - (\vec q \cdot \vec w) ,
$$

where \\( \vec q \cdot \vec w = q_x w_x + q_y w_y + q_z w_z = Q^x W^x + Q^y W^y + Q^z W^z\\) is the [Euclidean dot product](https://en.wikipedia.org/wiki/Dot_product) (we’ll use superscript indices for four-vector components and subscript indices for three-vector components).

### Adding Curl to the Mix

A special case of the vector triple product is when the “inner” cross product is the [curl](https://en.wikipedia.org/wiki/Curl_(mathematics)) of a [vector field](https://en.wikipedia.org/wiki/Vector_field) \\( 
  \vec c = \vec c (\vec r) \\) (using \\( \vec r \\) for the position vector):

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
\vec \nabla _{\vec c , \, f} [\vec a \cdot (\vec c + \vec \nabla f)] - (\vec a \cdot \vec \nabla) (\vec c + \vec \nabla f) &= \vec \nabla _{\vec c} (\vec a \cdot \vec c) + \vec \nabla _{f} (\vec a \cdot \vec \nabla f) - (\vec a \cdot \vec \nabla) \vec c - (\vec a \cdot \vec \nabla) \vec \nabla f \\
&= \vec \nabla _{\vec c} (\vec a \cdot \vec c) - (\vec a \cdot \vec \nabla) \vec c ,
\end{aligned}
$$

because for the scalar \\( f \\) we have \\( \vec \nabla _{f} (\vec a \cdot \vec \nabla f) = \vec \nabla _{f} (\vec a \cdot \vec \nabla) f = (\vec a \cdot \vec \nabla) \vec \nabla f \\) (if you need convincing write it out in terms of components).

The “four-del” is:

$$\vec \partial = \left( \frac{1}{c} \, \frac{\partial}{\partial t} , \, - \vec \nabla \right)$$

(\\( c \\) is the speed of light, and yes, that’s a negative sign&mdash;without it the four “components” [wouldn’t obey the Lorentz transformation](www.feynmanlectures.caltech.edu/II_25.html#Ch25-S3) and thus wouldn’t together constitute a four-vector operator). With \\( \vec R \\) as the [four-position](https://en.wikipedia.org/wiki/Four-vector#Four-position), the *Minkowski* differential vector triple product for a four-vector field \\( \vec C = \vec C ( \vec R ) \\) is:

$$
\vec A \; \text{“} \mkern-5mu \times (\vec \partial \times \mkern-5mu \text{”} \, \vec C) = \vec \partial _{\vec C} (\vec A \cdot \vec C) - (\vec A \cdot \vec \partial) \vec C .
$$

The resulting vector is likewise unchanged by a transformation that takes \\( \vec C \\) to (\\( \vec C + \vec \partial F \\)) for any spacetime scalar field \\( F = F (\vec R) \\), though now we can *only* show this with the “bac - cab” side:

$$
\begin{aligned}
\vec \partial _{\vec C , \, F} [\vec A \cdot (\vec C + \vec \partial F)] - (\vec A \cdot \vec \partial) (\vec C + \vec \partial F) &= \vec \partial _{\vec C} (\vec A \cdot \vec C) + (\vec A \cdot \vec \partial) \vec \partial F - (\vec A \cdot \vec \partial) \vec C - (\vec A \cdot \vec \partial) \vec \partial F \\
&= \vec \partial _{\vec C} (\vec A \cdot \vec C) - (\vec A \cdot \vec \partial) \vec C .
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

with \\( \Box = \vec \partial \cdot \vec \partial \\) as the [d’Alembertian](https://en.wikipedia.org/wiki/D%27Alembert_operator), a scalar operator. Taking \\( \vec C \\) to (\\( \vec C + \vec \partial F \\)) here looks like:

$$
\begin{aligned}
\vec \partial [\vec \partial \cdot (\vec C + \vec \partial F)] - \Box (\vec C + \vec \partial F) &= \vec \partial (\vec \partial \cdot \vec C) + \vec \partial \Box F - \Box \vec C - \Box \vec \partial F \\
&= \vec \partial (\vec \partial \cdot \vec C) - \Box \vec C ,
\end{aligned}
$$

where we’ve used \\( \Box \vec \partial = \vec \partial \Box \\) (because \\( \Box \\) is a scalar operator).

## Covariant Electrodynamics, Four-Vectors Only

The physics is really pretty simple now.

### Four-Current Density, Four-Potential, Lorenz Gauge

Charge- and current-densities together constitute a four-vector \\( \vec J = (\rho c, \vec j) \\) called the [four-current density](https://en.wikipedia.org/wiki/Four-current), which is the electromagnetic source field. We then define the [four-potential](https://en.wikipedia.org/wiki/Electromagnetic_four-potential) \\( \vec A \\) as any four-vector field whose (negative) “double curl” is the four-current density:

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
&= \Box (\vec A + \vec \partial \psi) ,
\end{aligned}
$$

leaving just a [wave equation](https://en.wikipedia.org/wiki/Wave_equation) for the “new” four-potential \\( \vec A + \vec \partial \psi \\), which we see is divergenceless: \\( \vec \partial \cdot (\vec A + \vec \partial \psi) = 0\\). Making this transformation is called imposing the [Lorenz gauge](https://en.wikipedia.org/wiki/Lorenz_gauge_condition), and it’s always possible to do. For any *divergenceless* \\( \vec A \\), then:

$$ \vec J = \Box \vec A = \left( \frac{1}{c^2} \, \frac{\partial^2}{\partial t^2} - \nabla^2 \right) \vec A .$$

So in the Lorenz gauge, a non-zero value of \\( \vec J \\) at a position in spacetime generates a commensurate disturbance in the \\( \vec A \\) field that spreads outward through space at the speed of light; the sum of all such disturbances passing through a location in space at a particular time determines the “value” of the (Lorenz-gauge) \\( \vec A \\) field at that spacetime point. (We still need scare quotes because for any scalar \\( \eta \\) that satisfies \\( \Box \eta = 0 \\), we get \\( \Box (\vec A + \vec \partial \eta) = \Box \vec A + \vec \partial \Box \eta = \Box \vec A \\), meaning that we have some “gauge freedom” even within the Lorenz gauge.)

### Lorentz Four-Force

The reason we care about the four-potential is the following empirical result:

$$\vec F = \frac{q}{c} \left[ \vec V \; \text{“} \mkern-5mu \times (\vec \partial \times \mkern-5mu \text{”} \, \vec A) \right].$$

This is the physical effect that the local “value” of the \\( \vec A \\) field has on a test charge at a given spacetime location (we’re differentiating the four-potential, so its non-uniqueness doesn’t matter). Here \\( q \\) is the particle’s charge, \\( \vec V \\) is its [four-velocity](https://en.wikipedia.org/wiki/Four-velocity#Definition_of_the_four-velocity), and \\( \vec F \\) is the resulting [four-force](https://en.wikipedia.org/wiki/Four-force) exerted on it (the full four-vector version of the [Lorentz force](https://en.wikipedia.org/wiki/Lorentz_force)).

We know from our mathematical preliminaries that this equation is unaffected by a gauge transformation of \\( \vec A \\), so it holds for *any* valid four-potential. Still, it’s easiest to think about all this in the Lorenz gauge:

- charge- and current-densities (the \\( \vec J \\) field) generate disturbances in the (Lorenz-gauge) \\( \vec A \\) field that travel outward through space at the speed of light;
- the sum of all such disturbances passing through a spacetime location determines the “value” of the (Lorenz-gauge) \\( \vec A \\) field there/then;
- if there’s a particle at that spacetime location, it’s subjected to a four-force determined by its charge, its four-velocity, and the local “value” of the (Lorenz-gauge) four-potential.

That’s how “information” about charges travels through spacetime and physically affects other charges.

Except for the [radiation reaction](https://en.wikipedia.org/wiki/Abraham%E2%80%93Lorentz_force#Abraham%E2%80%93Lorentz%E2%80%93Dirac_force), this is electrodynamics in a nutshell! To extract from this formalism the more familiar three-vector relations (Maxwell’s equations and the Lorentz three-force), put all the four-vectors into component form, define the electric and magnetic three-vector fields in terms of the four-potential \\( \vec A = (A^t, \vec a)\\) like \\( \vec e = - \vec \nabla A^t - \tfrac{\partial}{\partial(ct)} \vec a \\) and \\( \vec b = \vec \nabla \times \vec a \\), and do some algebra. We leave this as an exercise for the reader! &#128521; (Or see the relevant section of my [little treatise](https://drive.google.com/open?id=0BzbijOFcLYkTSWJ5R0s5U1ZMYWM).)
