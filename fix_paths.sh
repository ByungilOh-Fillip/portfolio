#!/bin/bash
find src -type f \( -name "*.astro" \) -exec sed -i '' -e 's|${import.meta.env.BASE_URL}introduce|${import.meta.env.BASE_URL.replace(/\\/$/, "")}/introduce|g' {} +
find src -type f \( -name "*.astro" \) -exec sed -i '' -e 's|${import.meta.env.BASE_URL}develop|${import.meta.env.BASE_URL.replace(/\\/$/, "")}/develop|g' {} +
find src -type f \( -name "*.astro" \) -exec sed -i '' -e 's|${import.meta.env.BASE_URL}project|${import.meta.env.BASE_URL.replace(/\\/$/, "")}/project|g' {} +
find src -type f \( -name "*.astro" \) -exec sed -i '' -e 's|${import.meta.env.BASE_URL}favicon.svg|${import.meta.env.BASE_URL.replace(/\\/$/, "")}/favicon.svg|g' {} +
find src -type f \( -name "*.astro" \) -exec sed -i '' -e 's|${import.meta.env.BASE_URL}fillip-text.png|${import.meta.env.BASE_URL.replace(/\\/$/, "")}/fillip-text.png|g' {} +
