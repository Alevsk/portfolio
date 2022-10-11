############################
# Do you like my website?
# You can have it :)!
# Download the source code directly from the github repository
############################

FROM scratch

MAINTAINER Lenin Alevski <lenin@alevsk.com>

EXPOSE 1337

COPY migrations migrations
COPY templates templates
COPY /download    .

CMD ["/download", "--url", "https://github.com/Alevsk/portfolio"]