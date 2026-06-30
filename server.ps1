$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Start()
Write-Host "Server started on http://localhost:8080/"

$root = "C:\Users\rawan\.gemini\antigravity\scratch\BimSprintWebsite"

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $path = $context.Request.Url.LocalPath
    if ($path -eq "/") { $path = "/index.html" }
    $filePath = Join-Path $root ($path.TrimStart("/").Replace("/","\"))
    
    if (Test-Path $filePath) {
        $content = [System.IO.File]::ReadAllBytes($filePath)
        $ext = [System.IO.Path]::GetExtension($filePath)
        $mime = "application/octet-stream"
        if ($ext -eq ".html") { $mime = "text/html; charset=utf-8" }
        if ($ext -eq ".css") { $mime = "text/css" }
        if ($ext -eq ".js") { $mime = "application/javascript" }
        if ($ext -eq ".png") { $mime = "image/png" }
        if ($ext -eq ".jpg") { $mime = "image/jpeg" }
        $context.Response.ContentType = $mime
        $context.Response.Headers.Add("Cache-Control", "no-cache, no-store, must-revalidate")
        $context.Response.Headers.Add("Pragma", "no-cache")
        $context.Response.Headers.Add("Expires", "0")
        $context.Response.ContentLength64 = $content.Length
        $context.Response.OutputStream.Write($content, 0, $content.Length)
    } else {
        $context.Response.StatusCode = 404
        $msg = [System.Text.Encoding]::UTF8.GetBytes("Not Found: $path")
        $context.Response.OutputStream.Write($msg, 0, $msg.Length)
    }
    $context.Response.Close()
}
