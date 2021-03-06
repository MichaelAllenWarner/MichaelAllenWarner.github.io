---
layout: post
title:  "Testing MathJax: Using Trace to Rearrange Matrix Products"
date:   2019-06-15 17:20:00 -0400
categories: math
excerpt: >
  My first post using MathJax. I explain how I load the script conditionally, and I share a little matrix maneuver I recently discovered.
usemathjax: true
---

## Conditional Script-Loading in Jekyll

I wanted the option of using [MathJax](https://www.mathjax.org/) in my blog without including the script in posts that don’t use it (browsers shouldn’t fetch it needlessly!). The blog runs on [Jekyll](https://jekyllrb.com/), and the way to do this is to make a custom rule in the `head.html` file (in the project’s `_includes` folder) that looks something like this:

```html
<head>
  <!-- ... -->{% raw %}
  {%- if page.fetchscript -%}
    <script type="text/javascript" async
      src="[scriptURL]">
    </script>
  {%- endif -%}
  {% endraw %}<!-- ... -->
</head>
```

Then for any posts that need the script in question, add the following YAML line to the [front matter](https://jekyllrb.com/docs/front-matter/) of the markdown file:

```yaml
fetchscript: true
```

## Testing MathJax: A Matrix Tip

This is a good excuse to share a little matrix maneuver I used the other day.

As you may know, the [trace](https://en.wikipedia.org/wiki/Trace_(linear_algebra)) of a square matrix is the sum of its [main-diagonal](https://en.wikipedia.org/wiki/Main_diagonal) entries, and the trace of a matrix product is [invariant under cyclic permutations](https://en.wikipedia.org/wiki/Trace_(linear_algebra)#Cyclic_property) of the multiplied matrices:

$$ \mathrm{Tr} (ABC) = \mathrm{Tr} (BCA) = \mathrm{Tr} (CAB) . $$

But even if you knew that and have used traces before, I wonder: have you ever thought to take the trace of a 1-by-1 matrix? Until recently I hadn’t, but a 1-by-1 certainly qualifies as a square matrix!

Here is a situation&mdash;the one I found myself in&mdash;in which taking the trace of a 1-by-1 is useful.

Say you’re using [matrix notation to represent](https://en.wikipedia.org/wiki/Matrix_multiplication#Dot_product,_bilinear_form_and_inner_product) $$ (\mathbf a \cdot \mathbf c)(\mathbf b \cdot \mathbf d) $$, the product of two [dot products](https://en.wikipedia.org/wiki/Dot_product) (in Cartesian coordinates). If square brackets around a vector signify its column-matrix representation, and if the subscript $$ \mathrm{T} $$ signifies the matrix [transpose](https://en.wikipedia.org/wiki/Transpose), that’s:

$$  [\mathbf a]^{\mathrm{T}} [\mathbf c][\mathbf b]^{\mathrm{T}}[\mathbf d] $$

 (so $$ [\mathbf a]^\mathrm{T} $$ is the row-matrix representation of $$ \mathbf a $$, and $$ [\mathbf c] $$ is the column-matrix representation of $$ \mathbf c $$). Note that this is a 1-by-1 matrix.

Now, the quantity $$ (\mathbf a \cdot \mathbf c)(\mathbf b \cdot \mathbf d) $$ is the definition of the [double dot product](https://en.wikipedia.org/wiki/Dyadics#Product_of_dyadic_and_dyadic) of the [dyads](https://en.wikipedia.org/wiki/Dyadics#Definitions_and_terminology) $$ \mathbf a \otimes \mathbf b $$ and $$ \mathbf c \otimes \mathbf d $$:

$$ ( \mathbf a \otimes \mathbf b ) : ( \mathbf c \otimes \mathbf d ) \equiv (\mathbf a \cdot \mathbf c)(\mathbf b \cdot \mathbf d) , $$

so $$ [\mathbf a]^{\mathrm{T}} [\mathbf c][\mathbf b]^{\mathrm{T}}[\mathbf d] $$ is equivalently the matrix representation of $$ ( \mathbf a \otimes \mathbf b ) : ( \mathbf c \otimes \mathbf d ) $$.

The double dot product isn’t only defined for dyads, though. It’s defined for *any* pair of [dyadics](https://en.wikipedia.org/wiki/Dyadics), which in general are *sums* of dyads, and I wanted a matrix representation for the double dot product that works for all dyadics. The expression $$ [\mathbf a]^{\mathrm{T}} [\mathbf c][\mathbf b]^{\mathrm{T}}[\mathbf d] $$ doesn’t fit the bill because the constituent vectors of each input-dyad are separated from each other; there’s nowhere to “plug in” matrix representations of non-dyad dyadics, if you follow.

So here is the trick. First, invoke the commutativity of the dot product to reorder things slightly:

$$\begin{aligned}
( \mathbf a \otimes \mathbf b ) : ( \mathbf c \otimes \mathbf d ) &= (\mathbf a \cdot \mathbf c)(\mathbf b \cdot \mathbf d) \\
&= (\mathbf c \cdot \mathbf a)(\mathbf b \cdot \mathbf d) .
\end{aligned}$$

Next, note that $$ (\mathbf c \cdot \mathbf a)(\mathbf b \cdot \mathbf d) $$ is equal to the trace of its 1-by-1 matrix representation, and take advantage of the fact that the trace of a matrix product is invariant under cyclic permutations of the multiplied matrices:

$$
\begin{aligned}
( \mathbf a \otimes \mathbf b ) : ( \mathbf c \otimes \mathbf d ) &= (\mathbf c \cdot \mathbf a)(\mathbf b \cdot \mathbf d) \\
&= \mathrm{Tr} \left( [\mathbf c]^{\mathrm{T}} [\mathbf a][\mathbf b]^{\mathrm{T}}[\mathbf d] \right) \\
&= \mathrm{Tr} \left( [\mathbf a][\mathbf b]^{\mathrm{T}}[\mathbf d] [\mathbf c]^{\mathrm{T}} \right) .
\end{aligned}
$$

Since $$ [\mathbf a][\mathbf b]^{\mathrm{T}} $$ is the matrix representation of the dyad $$ \mathbf a \otimes \mathbf b $$, and since $$ [\mathbf d] [\mathbf c]^{\mathrm{T}} $$ is the *transpose* of the matrix representation of $$ \mathbf c \otimes \mathbf d $$, we now have a matrix expression of the double dot product for dyads that readily generalizes to non-dyad dyadics. For a pair of arbitrary dyadics $$ \mathbf{A} $$ and $$ \mathbf{B} $$, it is:

$$ \mathbf{A} : \mathbf{B} = \mathrm{Tr} \left( [\mathbf{A}] [\mathbf{B}]^{\mathrm{T}} \right) , $$

where $$ [\mathbf{A}] $$ and $$ [\mathbf{B}] $$ are the square-matrix representations of our dyadics.
