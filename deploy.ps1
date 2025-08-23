param (
    [Parameter(Mandatory=$true)]
    [ValidateSet("pages", "worker")]
    [string]$target
)

if ($target -eq "pages") {
    Write-Host "🔄 Switching to Pages config..."
    Copy-Item -Path "wrangler.pages.toml" -Destination "wrangler.toml" -Force

    Write-Host "🚀 Deploying to Cloudflare Pages..."
    wrangler pages deploy

    Remove-Item "wrangler.toml"
    Write-Host "✅ Pages deploy complete, config restored."
}

if ($target -eq "worker") {
    Write-Host "🚀 Deploying Worker..."
    wrangler deploy --config wrangler.worker.toml
    Write-Host "✅ Worker deploy complete."
}
