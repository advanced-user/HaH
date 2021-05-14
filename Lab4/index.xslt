<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h2 align = "center">Смартфоны</h2>
                <table border="5" align = "center">
                    <tr bgcolor="red">
                        <th>Модель</th>
                        <th>Описание</th>
                        <th>Производитель</th>
                        <th>Операционная система</th>
                        <th>Графический процессор</th>
                        <th>Вес</th>
                        <th>RAM</th>
                    </tr>
                    <xsl:for-each select="brands/brand">
                        <tr text_align = "center">
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="description"/></td>
                            <td><xsl:value-of select="characteristics/producer"/></td>
                            <td><xsl:value-of select="characteristics/operating-system"/></td>
                            <td><xsl:value-of select="characteristics/graphics-processor"/></td>
                            <td><xsl:value-of select="characteristics/weight"/></td>
                            <td><xsl:value-of select="characteristics/RAM"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>