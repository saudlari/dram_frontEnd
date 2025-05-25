# Dram

![Whiskey Warehouse](docs/bin/whisky-warehouse.PNG)

[BackEnd Project] (https://github.com/tom-craven/dram)
### Business Objectives


The project aims to innovate the Scottish whiskey industry by fictionalising whiskey-backed securities using
semi-fungible token technology. It provides secure, transparent, and
efficient solutions for buying, selling, and investing in whiskey with a return on investment.

The business objectives are

- Bring new users into the crypto ecosystem and real GDP of 71bn GBP on-chain
- Bring new investment into the Whiskey industry by providing a ramp from the 3+ trillion dollar
  crypto market
- Enhance the profile of the Scottish Whiskey industry internationally
- Provide a high-quality, relatively stable investment return to crypto investors
- Lower financial barriers to entry by fictionalising whiskey securities
- Provide a gateway for whisky investors to meet like-minded communities.
- Provide users with the status and novelty of owning an existing asset
- Allow self-custody of digital securities, which are transferable and liquid assets

*note: The software being developed is asset agnostic, it could be used for other use cases other
than whiskey bonds and has value as a SAAS platform or re-sale of source code.*

## Project Overview

See the [statement of requirements](docs/statement-of-requirements.md) driving development of this
project.

---

### Overview - System-as-is

```mermaid
flowchart LR
    wl[Web3 wallet]
    cl["Rest Client"]
    dm["Dram"]
    s3["Amazon S3"]
    db["Mongo DB"]
    ax["Avalanche"]
    wl <-->|READ File/Metadata| dm
    wl <-->|Contract functions| ax
    cl <-->|Entry point| dm
    dm <-->|Manage Files| s3
    dm <-->|Extended Storage| db
    dm <-->|Manage SFT| ax
```

### Components

- Rest client running in test execution environment, pointing to local running application.
- Web 3 wallet running in the clients browser and local network
- Dram Orchestrator responsible for coordinating transactions
- Mongo Db responsible for extended data persistence locally
- S3 service responsible for writing and maintaining files to a in local memory file system
- AVAX running locally with Anvil, responsible for maintaining NFT and Sale smart contracts

### Technology Stack

- **Frontend**: Built with React, utilizing libraries such as `wagmi` for Ethereum hooks and `@rainbow-me/rainbowkit` for wallet integration.
- **Backend**: Interacts with smart contracts deployed on the Avalanche network.
- **Smart Contracts**: Utilizes ERC1155 for semi-fungible tokens, with contract interactions managed through `ethers.js`.
- **State Management**: Managed using `@tanstack/react-query` for efficient data fetching and caching.
- **Styling**: Implemented with Tailwind CSS and DaisyUI for a responsive and modern UI.

### Live Project

You can view the live project [here](https://dynamic-cascaron-ec36d7.netlify.app/).
