+++
title = "Iroh: IPFS Reimagined"
description = ""
template="design/page.html"
[extra]
section="1."
+++

# Abstract

Iroh is a peer-2-peer protocol for caching and distributing arbitrary blobs of data in networks with high churn. Written by veterans of the IPFS community, Iroh is a ground up effort focused on performance, reliability, scalability, and efficiency.

Iroh is a caching and distribution network. It assumes users some outside solution to the data availability, for example, by leaving a computer connected to the network, or using a high-availability backing service. This is distinct from networks like BitTorrent [7], which go to great lengths to preserve content availability.

# Iroh Overview

## Content Routing

The DSHT is outlined [in another paper](/design/dsht). Iroh uses a DSHT as a ****sloppy**** *pointer machine* that connects content identifiers with available providers of that content

- the iroh DSHT supports **stealth peers,** which act as lightweight clients that hydrate their routing tables via updates appended to responses from service nodes
- stealth peers can read and write DHT records, and provide content

## Data Transfer

<a class="next-page-button" href="/design/content-addressing">
Next: 2. Content Addressing
</a>

---

# References

1. **J. Benet, “IPFS - Content Addressed, Versioned, P2P File System”**<br />
[https://ipfs.io/ipfs/QmR7GSQM93Cx5eAg6a6yRzNde1FQv7uL6X1o4k7zrJa3LX/ipfs.draft3.pdf](https://ipfs.io/ipfs/QmR7GSQM93Cx5eAg6a6yRzNde1FQv7uL6X1o4k7zrJa3LX/ipfs.draft3.pdf)
2. **Trautwein, D. et al: “Design and Evaluation of IPFS: A Storage Layer for the Decentralized Web”**<br />
[https://ipfs.io/ipfs/bafybeid6doxhzck3me366265u3ony6rbuzv7dze7pjuptxeln24b2qvur4?filename=trautwein2022a.pdf](https://ipfs.io/ipfs/bafybeid6doxhzck3me366265u3ony6rbuzv7dze7pjuptxeln24b2qvur4?filename=trautwein2022a.pdf)
3. **blake3**<br />
[https://github.com/BLAKE3-team/BLAKE3-specs/blob/master/blake3.pdf](https://github.com/BLAKE3-team/BLAKE3-specs/blob/master/blake3.pdf)
4. **bao**<br />
[https://github.com/oconnor663/bao](https://github.com/oconnor663/bao)
5. **CID (Content IDentifier): Self-describing content-addressed identifiers for distributed systems**<br />
[https://github.com/multiformats/cid](https://github.com/multiformats/cid)
6. **WNFS**<br />
[https://whitepaper.fission.codes/file-system/file-system-basics](https://whitepaper.fission.codes/file-system/file-system-basics)
7. **BitTorrent**<br />
[https://www.bittorrent.org/beps/bep_0003.html](https://www.bittorrent.org/beps/bep_0003.html)
8. **multihashes**<br />
[https://multiformats.io/multihash/](https://multiformats.io/multihash/)
9. **Kraken: a P2P-powered Docker registry that focuses on scalability and availability.**<br />
[https://github.com/uber/kraken](https://github.com/uber/kraken)